/**
 * @summary
 * Global type definitions
 *
 * @module types
 *
 * @description
 * Defines global TypeScript types and interfaces used throughout the application.
 */

/**
 * @interface PaginationParams
 * @description Standard pagination parameters
 *
 * @property {number} [page] - Page number (default: 1)
 * @property {number} [pageSize] - Items per page (default: 50)
 */
export interface PaginationParams {
  page?: number;
  pageSize?: number;
}

/**
 * @interface PaginatedResponse
 * @description Standard paginated response format
 *
 * @property {T[]} data - Array of items
 * @property {number} total - Total number of items
 * @property {number} page - Current page number
 * @property {number} pageSize - Items per page
 * @property {boolean} hasNext - Whether there is a next page
 * @property {boolean} hasPrevious - Whether there is a previous page
 */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasNext: boolean;
  hasPrevious: boolean;
}
