import { ReactNode } from 'react';
'use client';
import { motion } from 'framer-motion';

interface MotionWrapperProps {
  children: ReactNode;
  [key: string]: any;
}

export default function MotionWrapper({ children, ...props }: MotionWrapperProps) {
  return (
    <motion.div {...props}>
      {children}
    </motion.div>
  );
} 