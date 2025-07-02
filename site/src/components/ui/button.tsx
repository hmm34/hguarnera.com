import React from "react";

export function Button({ children, ...props }: React.ComponentProps<'button'>) {
  return (
    <button
      className="inline-flex items-center rounded-md border px-3 py-1 text-sm hover:bg-gray-100"
      {...props}
    >
      {children}
    </button>
  );
}
