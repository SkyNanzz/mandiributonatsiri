import './LoadingSpinner.css';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export function LoadingSpinner({ size = 'md', text = 'Memuat...' }: LoadingSpinnerProps) {
  return (
    <div className={`loading-spinner loading-spinner--${size}`} role="status">
      <div className="loading-spinner__ring" />
      <span className="sr-only">{text}</span>
    </div>
  );
}
