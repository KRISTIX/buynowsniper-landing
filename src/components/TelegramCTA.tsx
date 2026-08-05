import { site } from "@/lib/site";

type LinkCTAProps = {
  className?: string;
  label?: string;
  secondary?: boolean;
};

export function TelegramCTA({
  className = "",
  label = "Start free 7-day trial",
  secondary = false,
}: LinkCTAProps) {
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

export function ContactSalesCTA({
  className = "",
  label = "Contact sales",
  secondary = true,
}: LinkCTAProps) {
  return (
    <a
      href={site.supportTelegram}
      target="_blank"
      rel="noopener noreferrer"
      className={`${secondary ? "cta-secondary" : "cta-primary"} ${className}`}
    >
      {label}
    </a>
  );
}
