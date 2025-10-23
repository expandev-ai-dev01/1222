/**
 * @variants Container
 * @summary Style variants for Container component
 */

import { clsx } from 'clsx';
import type { ContainerProps } from './types';

export function getContainerClassName(props: ContainerProps): string {
  const { size = 'default', className } = props;

  return clsx(
    'mx-auto px-4 sm:px-6 lg:px-8',
    {
      'max-w-3xl': size === 'small',
      'max-w-7xl': size === 'default',
      'max-w-screen-2xl': size === 'large',
      'max-w-full': size === 'full',
    },
    className
  );
}
