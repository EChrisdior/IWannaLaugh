export function Button({ className = "", variant, ...props }) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-6 py-4 font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const variantStyles =
    variant === "secondary"
      ? "bg-slate-100 text-slate-900 hover:bg-slate-200 focus-visible:ring-slate-500"
      : "bg-black text-white hover:bg-slate-900 focus-visible:ring-black";

  return <button className={`${baseStyles} ${variantStyles} ${className}`} {...props} />;
}
