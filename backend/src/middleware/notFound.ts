/**
 * @summary
 * 404 Not Found middleware
 *
 * @module middleware/notFound
 *
 * @description
 * Handles requests to undefined routes by returning a standardized 404 response.
 */

import { Request, Response } from 'express';

/**
 * @summary
 * Express middleware for handling 404 errors
 *
 * @function notFoundMiddleware
 *
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 *
 * @returns {void}
 */
export function notFoundMiddleware(req: Request, res: Response): void {
  res.status(404).json({
    success: false,
    error: {
      code: 'NOT_FOUND',
      message: `Route ${req.method} ${req.path} not found`,
    },
    timestamp: new Date().toISOString(),
  });
}
