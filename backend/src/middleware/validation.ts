/**
 * @summary
 * Request validation middleware
 *
 * @module middleware/validation
 *
 * @description
 * Provides middleware for validating request data using Zod schemas.
 */

import { Request, Response, NextFunction } from 'express';
import { z, ZodSchema } from 'zod';

/**
 * @summary
 * Creates validation middleware for request body
 *
 * @function validateBody
 *
 * @param {ZodSchema} schema - Zod schema for validation
 *
 * @returns {Function} Express middleware function
 *
 * @throws {ZodError} When validation fails
 */
export function validateBody(schema: ZodSchema) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error) {
      next(error);
    }
  };
}

/**
 * @summary
 * Creates validation middleware for query parameters
 *
 * @function validateQuery
 *
 * @param {ZodSchema} schema - Zod schema for validation
 *
 * @returns {Function} Express middleware function
 *
 * @throws {ZodError} When validation fails
 */
export function validateQuery(schema: ZodSchema) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.query = await schema.parseAsync(req.query);
      next();
    } catch (error) {
      next(error);
    }
  };
}

/**
 * @summary
 * Creates validation middleware for route parameters
 *
 * @function validateParams
 *
 * @param {ZodSchema} schema - Zod schema for validation
 *
 * @returns {Function} Express middleware function
 *
 * @throws {ZodError} When validation fails
 */
export function validateParams(schema: ZodSchema) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.params = await schema.parseAsync(req.params);
      next();
    } catch (error) {
      next(error);
    }
  };
}
