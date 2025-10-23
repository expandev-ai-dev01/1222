/**
 * @component Container
 * @summary Responsive container component
 * @domain core
 * @type ui-component
 * @category layout
 */

import { getContainerClassName } from './variants';
import type { ContainerProps } from './types';

export const Container = ({ children, size = 'default', className }: ContainerProps) => {
  return <div className={getContainerClassName({ size, className })}>{children}</div>;
};
