/**
 * @summary
 * Global error handling middleware
 *
 * @module middleware/error
 *
 * @description
 * Provides centralized error handling for all API endpoints.
 * Formats errors consistently and logs them appropriately.
 */

import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

/**
 * @interface ErrorResponse
 * @description Standard error response format
 *
 * @property {boolean} success - Always false for errors
 * @property {object} error - Error details
 * @property {string} error.code - Error code
 * @property {string} error.message - Error message
 * @property {any} [error.details] - Additional error details
 * @property {string} timestamp - Error timestamp
 */
interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

/**
 * @summary
 * Express error handling middleware
 *
 * @function errorMiddleware
 *
 * @param {Error} error - Error object
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 *
 * @returns {void}
 */
export function errorMiddleware(error: any, req: Request, res: Response, next: NextFunction): void {
  // Log error for debugging
  if (process.env.NODE_ENV !== 'production') {
    console.error('Error:', error);
  }

  // Handle Zod validation errors
  if (error instanceof ZodError) {
    const errorResponse: ErrorResponse = {
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Validation failed',
        details: error.errors,
      },
      timestamp: new Date().toISOString(),
    };
    res.status(400).json(errorResponse);
    return;
  }

  // Handle custom application errors
  if (error.statusCode) {
    const errorResponse: ErrorResponse = {
      success: false,
      error: {
        code: error.code || 'APPLICATION_ERROR',
        message: error.message,
        details: error.details,
      },
      timestamp: new Date().toISOString(),
    };
    res.status(error.statusCode).json(errorResponse);
    return;
  }

  // Handle generic errors
  const errorResponse: ErrorResponse = {
    success: false,
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message:
        process.env.NODE_ENV === 'production'
          ? 'An unexpected error occurred'
          : error.message || 'Internal server error',
    },
    timestamp: new Date().toISOString(),
  };
  res.status(500).json(errorResponse);
}
