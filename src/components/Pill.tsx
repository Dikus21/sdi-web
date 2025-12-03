interface PillsProps {
  children: React.ReactNode;
  className?: string;
}

export default function Pill({ children, className }: PillsProps) {
  return (
    <div
      className={`${className} inline-block px-5 py-3 bg-primary/20 rounded-full border border-primary`}
    >
      <span className="text-primary text-sm font-semibold uppercase tracking-wide">
        {children}
      </span>
    </div>
  );
}
