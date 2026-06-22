import { CALENDLY_URL } from "@/app/lib/constants";

type Props = {
  children: React.ReactNode;
  /** "solid" = magenta filled (primary). "outline" = bordered (secondary). */
  variant?: "solid" | "outline";
  className?: string;
};

/**
 * The one and only button style on the site. Every CTA points to Calendly,
 * opens in a new tab, and shares identical shape/sizing for consistency.
 */
export default function CTAButton({
  children,
  variant = "solid",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-base font-medium tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2";

  const styles =
    variant === "solid"
      ? "bg-brand-magenta text-white shadow-sm hover:bg-brand-magenta-dark hover:shadow-md"
      : "border border-brand-magenta/30 text-brand-magenta hover:border-brand-magenta hover:bg-brand-magenta/5";

  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
