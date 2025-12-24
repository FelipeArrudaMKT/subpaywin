
import React from 'react';

// Fix: Added missing React import to resolve 'Cannot find namespace React' for React.ReactNode.
export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Step {
  number: number;
  text: string;
}
