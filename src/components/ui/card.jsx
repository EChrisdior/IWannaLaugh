export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`rounded-3xl bg-white/90 shadow-2xl shadow-pink-500/10 backdrop-blur-xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className = "", children, ...props }) {
  return (
    <div className={`space-y-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
