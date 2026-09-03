import { Star } from "lucide-react";

export function Stars({ count = 5, size = 14 }: { count?: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-gold" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} width={size} height={size} className="fill-gold text-gold" strokeWidth={1} />
      ))}
    </span>
  );
}
