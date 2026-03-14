import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="font-display text-6xl text-cyan mb-4" style={{ fontWeight: 700 }}>404</div>
        <h1 className="font-display text-2xl text-foreground mb-2" style={{ fontWeight: 600 }}>Page not found</h1>
        <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-navy rounded-xl hover:bg-cyan/90 transition-colors text-sm"
          style={{ fontWeight: 600 }}
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
