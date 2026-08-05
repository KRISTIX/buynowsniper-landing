import { site } from "@/lib/site";

type TelegramCTAProps = {
  className?: string;
  label?: string;
  secondary?: boolean;
};

export function TelegramCTA({
  className = "",
  label = "Start free 7-day trial",
  secondary = false,
}: TelegramCTAProps) {
  return (
    <a
      href={site.telegramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${secondary ? "cta-secondary" : "cta-primary"} ${className}`}
    >
      {label}
    </a>
  );
}
