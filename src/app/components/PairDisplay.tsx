import { cn } from "./ui/utils";

interface PairDisplayProps {
  sellToken: { symbol: string; color: string };
  buyToken: { symbol: string; color: string };
  size?: "sm" | "md" | "lg";
  className?: string;
}

const tokenColors: Record<string, string> = {
  USDC: "#2775CA",
  WETH: "#627EEA",
  WBTC: "#F7931A",
  WMATIC: "#8247E5",
  DAI: "#F5AC37",
  LINK: "#2A5ADA",
  AAVE: "#B6509E",
  UNI: "#FF007A",
};

export function getTokenColor(symbol: string): string {
  return tokenColors[symbol] || "#6B7280";
}

export function TokenIcon({ symbol, size = "md" }: { symbol: string; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = { sm: "w-6 h-6 text-[9px]", md: "w-8 h-8 text-[10px]", lg: "w-10 h-10 text-xs" };
  const color = getTokenColor(symbol);
  return (
    <div
      className={cn("rounded-full flex items-center justify-center text-white", sizeClasses[size])}
      style={{ backgroundColor: color, fontWeight: 600 }}
    >
      {symbol.slice(0, 2)}
    </div>
  );
}

export function PairDisplay({ sellToken, buyToken, size = "md", className }: PairDisplayProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center -space-x-2">
        <TokenIcon symbol={sellToken.symbol} size={size} />
        <TokenIcon symbol={buyToken.symbol} size={size} />
      </div>
      <div className="flex items-center gap-1">
        <span className="font-display" style={{ fontWeight: 600 }}>{sellToken.symbol}</span>
        <span className="text-muted-foreground">&rarr;</span>
        <span className="font-display" style={{ fontWeight: 600 }}>{buyToken.symbol}</span>
      </div>
    </div>
  );
}
