import { Link } from "react-router";
import {
  ArrowRight,
  Wallet,
  Shield,
  BarChart3,
  Zap,
  Search,
  LineChart,
  Lock,
  Eye,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Sparkline } from "../components/Sparkline";
import { TokenIcon } from "../components/PairDisplay";
import { useState } from "react";

interface HomeProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const faqItems = [
  {
    q: "What does non-custodial mean?",
    a: "Your funds never leave your wallet. Peerbutter requests capped permissions to execute trades on your behalf, but you retain full control and can revoke access at any time.",
  },
  {
    q: "How are setups screened?",
    a: "Each token pair is evaluated using historical backtest performance, onchain liquidity depth, and signal quality scoring. Only pairs meeting minimum thresholds are shown by default.",
  },
  {
    q: "What are the fees?",
    a: "Peerbutter charges a small service fee only on successful executions. If a trade doesn't execute, you pay nothing. Fee details are shown before you approve any strategy.",
  },
  {
    q: "Which chains are supported?",
    a: "Peerbutter is live on Polygon today. Multi-chain support is planned for the future.",
  },
  {
    q: "Can I build custom strategies?",
    a: "Yes. You can start from a screened template or use the strategy builder to define your own trigger, confirmation, and execution rules with chart-based indicators.",
  },
];

export function Home({ isDark, onToggleTheme }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header isDark={isDark} onToggleTheme={onToggleTheme} walletState="disconnected" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm mb-6">
                <Wallet className="w-3.5 h-3.5" />
                Wallet-first crypto automation
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] text-foreground mb-6" style={{ fontWeight: 700, lineHeight: 1.15 }}>
                Find stronger crypto setups.{" "}
                <span className="text-cyan">Automate the trade from your wallet.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl" style={{ lineHeight: 1.7 }}>
                Peerbutter helps traders move from signal discovery to onchain execution with screened pair rankings, backtested templates, and non-custodial permissions.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  to="/recommendations"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-navy rounded-xl hover:bg-cyan/90 transition-colors text-sm"
                  style={{ fontWeight: 600 }}
                >
                  Explore Setups <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/strategy/new"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card text-foreground rounded-xl hover:bg-muted/50 transition-colors text-sm"
                  style={{ fontWeight: 500 }}
                >
                  Build a Strategy
                </Link>
              </div>

              {/* Trust bar */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                {[
                  { icon: Shield, text: "Non-custodial" },
                  { icon: Wallet, text: "Wallet-first" },
                  { icon: Zap, text: "Polygon" },
                  { icon: CheckCircle2, text: "Fees only on successful executions" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-cyan" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual + Connect Card */}
            <div className="relative">
              {/* Wallet connect card */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-black/5 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <h3 className="text-foreground" style={{ fontWeight: 600 }}>Connect Wallet</h3>
                    <p className="text-xs text-muted-foreground">Sign a message to unlock your trading workspace</p>
                  </div>
                </div>
                <button className="w-full py-3 bg-cyan text-navy rounded-xl hover:bg-cyan/90 transition-colors text-sm" style={{ fontWeight: 600 }}>
                  Connect Wallet
                </button>
              </div>

              {/* Mini preview cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex -space-x-1.5">
                      <TokenIcon symbol="USDC" size="sm" />
                      <TokenIcon symbol="WETH" size="sm" />
                    </div>
                    <span className="text-sm" style={{ fontWeight: 600 }}>USDC → WETH</span>
                  </div>
                  <Sparkline data={[42, 45, 43, 48, 52, 55, 53, 58, 62, 60, 65, 68]} color="#22C55E" width={120} height={35} />
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-muted-foreground">Score</span>
                    <span className="text-sm font-display text-green" style={{ fontWeight: 600 }}>8.7</span>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <div className="text-xs text-muted-foreground mb-2">Strategy Template</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground">Type</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-cyan/10 text-cyan">Price Swap</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground">Trigger</span>
                      <span className="text-xs">RSI &lt; 30</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground">Win Rate</span>
                      <span className="text-xs text-green">67%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-surface-2">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl text-foreground mb-3" style={{ fontWeight: 700 }}>How it works</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">From discovery to execution in four clear steps.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", icon: Search, title: "Find a setup", desc: "Browse ranked pairs with performance and liquidity context." },
              { step: "2", icon: LineChart, title: "Review the logic", desc: "Check the chart, trigger, backtest snapshot, and warning flags." },
              { step: "3", icon: Lock, title: "Approve and sign", desc: "Set caps and permissions from your wallet." },
              { step: "4", icon: Eye, title: "Track execution", desc: "Monitor every strategy and onchain execution in one place." },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="relative rounded-xl border border-border bg-card p-6 group hover:border-cyan/30 transition-colors">
                <div className="absolute -top-3 left-4 bg-cyan text-navy text-xs px-2.5 py-1 rounded-md font-mono" style={{ fontWeight: 600 }}>
                  Step {step}
                </div>
                <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center mb-4 mt-2">
                  <Icon className="w-5 h-5 text-cyan" />
                </div>
                <h3 className="text-foreground mb-2" style={{ fontWeight: 600 }}>{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl text-foreground mb-3" style={{ fontWeight: 700 }}>Why traders use Peerbutter</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Most crypto tools stop at alerts or raw charts. Peerbutter takes you from discovery to execution with clearer setup quality, wallet-safe permissions, and live tracking.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Ranked setups, not raw noise",
                desc: "See pairs surfaced by signal quality, backtest behavior, and liquidity checks.",
              },
              {
                icon: Zap,
                title: "Start from a template",
                desc: "Launch faster with prefilled strategies generated from live setups.",
              },
              {
                icon: Shield,
                title: "Your wallet stays in control",
                desc: "No deposits. No custody transfer. You approve capped permissions.",
              },
              {
                icon: CheckCircle2,
                title: "Built for real execution",
                desc: "Set slippage, expiry, spending limits, and review every execution.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6 hover:border-cyan/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-cyan" />
                </div>
                <h3 className="text-foreground mb-2" style={{ fontWeight: 600 }}>{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security trust section */}
      <section className="py-20 bg-surface-2">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: "No deposits", desc: "Funds stay in your wallet at all times." },
              { icon: Wallet, label: "Non-custodial", desc: "You approve capped, revocable permissions." },
              { icon: CheckCircle2, label: "Success-only fees", desc: "Pay nothing unless a trade executes." },
              { icon: Zap, label: "Polygon live", desc: "Fast, low-cost onchain execution." },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-cyan" />
                </div>
                <h4 className="text-foreground mb-1" style={{ fontWeight: 600 }}>{label}</h4>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-foreground mb-10 text-center" style={{ fontWeight: 700 }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-sm text-foreground" style={{ fontWeight: 500 }}>{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 -mt-1">
                    <p className="text-sm text-muted-foreground">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-navy to-slate-dark">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl text-white mb-4" style={{ fontWeight: 700 }}>
            Stop chasing random pairs. Trade with a plan.
          </h2>
          <p className="text-slate-300 mb-8">
            Explore screened setups or build your own automated strategy.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/recommendations"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-navy rounded-xl hover:bg-cyan/90 transition-colors text-sm"
              style={{ fontWeight: 600 }}
            >
              Explore Setups <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/strategy/new"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white/5 transition-colors text-sm"
              style={{ fontWeight: 500 }}
            >
              Build a Strategy
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
