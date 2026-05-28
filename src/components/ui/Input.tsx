import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, className, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          id={id}
          ref={ref}
          className={`peer w-full rounded-md border border-card-border bg-card px-4 pb-2 pt-6 text-text placeholder-transparent shadow-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary ${className}`}
          placeholder={label}
          {...props}
        />
        <label
          htmlFor={id}
          className="absolute left-4 top-2 cursor-text text-sm text-text-muted transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-sm peer-focus:text-primary"
        >
          {label}
        </label>
      </div>
    );
  },
);
Input.displayName = 'Input';

export default Input;
