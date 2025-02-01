'use client';

import { Toaster } from "sonner";

export function ToasterProvider() {
  return (
    <Toaster 
      position="top-right"
      toastOptions={{
        className: 'rounded-xl border border-gray-100',
        style: { background: '#dcfce7' },
        duration: 4000,
      }}
    />
  );
}
