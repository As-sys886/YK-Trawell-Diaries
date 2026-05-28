import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ id, label, className, ...props }, ref) => {
    return (
      <div className="relative">
        <textarea
          id={id}
          ref={ref}
          className={`peer w-full rounded-md border border-card-border bg-card px-4 pb-2 pt-6 text-text placeholder-transparent shadow-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary ${className}`}
          placeholder={label}
          rows={4}
          {...props}
        />
        <label
          htmlFor={id}
          className="absolute left-4 top-2 cursor-text text-sm text-text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:-translate-y-0 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-sm peer-focus:text-primary"
        >
          {label}
        </label>
      </div>
    );
  },
);
TextArea.displayName = 'TextArea';

export default TextArea;
