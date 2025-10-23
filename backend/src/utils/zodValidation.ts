/**
 * @summary
 * Zod validation utilities and reusable schemas
 *
 * @module utils/zodValidation
 *
 * @description
 * Provides common Zod validation schemas and utilities for consistent validation across the application.
 */

import { z } from 'zod';

/**
 * @summary String validation with length constraints
 */
export const zString = z.string().min(1, 'Field is required').max(255, 'Field is too long');

/**
 * @summary Nullable string validation
 */
export const zNullableString = z.string().max(255, 'Field is too long').nullable();

/**
 * @summary Name validation (1-100 characters)
 */
export const zName = z.string().min(1, 'Name is required').max(100, 'Name is too long');

/**
 * @summary Description validation (nullable, max 500 characters)
 */
export const zNullableDescription = z.string().max(500, 'Description is too long').nullable();

/**
 * @summary Email validation
 */
export const zEmail = z.string().email('Invalid email format');

/**
 * @summary Phone validation (basic format)
 */
export const zPhone = z.string().regex(/^[\d\s()+-]+$/, 'Invalid phone format');

/**
 * @summary URL validation
 */
export const zUrl = z.string().url('Invalid URL format');

/**
 * @summary Positive number validation
 */
export const zPositiveNumber = z.number().positive('Must be a positive number');

/**
 * @summary Non-negative number validation
 */
export const zNonNegativeNumber = z.number().nonnegative('Must be a non-negative number');

/**
 * @summary Boolean bit validation (0 or 1)
 */
export const zBit = z.union([z.literal(0), z.literal(1)]);

/**
 * @summary Date string validation (ISO format)
 */
export const zDateString = z.string().datetime('Invalid date format');

/**
 * @summary ID validation (positive integer)
 */
export const zId = z.number().int().positive('Invalid ID');

/**
 * @summary Foreign key validation (positive integer)
 */
export const zFK = z.number().int().positive('Invalid foreign key');

/**
 * @summary Nullable foreign key validation
 */
export const zNullableFK = z.number().int().positive('Invalid foreign key').nullable();
