import Link from 'next/link';

interface NeonButtonProps {
  href: string;
  text: string;
  className?: string;
}

export default function NeonButton({ href, text, className }: NeonButtonProps) {
  const baseClasses = "inline-block text-center px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-lg shadow hover:shadow-[0_0_16px_4px_rgba(0,255,247,0.3)] transition-transform duration-300 hover:scale-105 animate-glow text-lg";

  return (
    <Link 
      href={href} 
      className={`${baseClasses} ${className}`}
    >
      {text}
    </Link>
  );
} 