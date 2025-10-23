/**
 * @types Container
 * @summary Type definitions for Container component
 */

import { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  size?: 'small' | 'default' | 'large' | 'full';
  className?: string;
}
