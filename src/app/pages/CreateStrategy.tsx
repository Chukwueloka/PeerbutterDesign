import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Info,
  Shield,
  TrendingUp,
  AlertCircle,
  Wallet,
} from "lucide-react";
import { TokenIcon } from "../components/PairDisplay";
import { Sparkline } from "../components/Sparkline";

const steps = [
  { id: 1, label: "Market", desc: "Select tokens and timeframe" },
  { id: 2, label: "Trigger", desc: "Define entry conditions" },
  { id: 3, label: "Confirm", desc: "Add confirmation filters" },
  { id: 4, label: "Execution", desc: "Set amounts and limits" },
  { id: 5, label: "Review", desc: "Approve and sign" },
];

export function CreateStrategy() {
  const [currentStep, setCurrentStep] = useState(1);
  const [strategyType, setStrategyType] = useState<"price_swap" | "dca">("price_swap");
  const [triggerMode, setTriggerMode] = useState<"indicator" | "level">("indicator");

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <Link to="/dashboard" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </Link>
      <div className="mb-8">
        <h1 className="font-display text-3xl text-foreground mb-2" style={{ fontWeight: 700 }}>
          Build an Automated Trade
        </h1>
        <p className="text-muted-foreground">
          Start from a screened template or define your own trigger, confirmation, and execution rules.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-8">
        {/* Main builder */}
        <div>
          {/* Stepper */}
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
            {steps.map((step, i) => (
              <div key={step.id} className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => setCurrentStep(step.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-colors ${
                    currentStep === step.id
                      ? "border-cyan bg-cyan/10 text-cyan"
                      : currentStep > step.id
                      ? "border-green/30 bg-green/5 text-green"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                      currentStep > step.id
                        ? "bg-green text-white"
                        : currentStep === step.id
                        ? "bg-cyan text-navy"
                        : "bg-muted text-muted-foreground"
                    }`}
                    style={{ fontWeight: 600 }}
                  >
                    {currentStep > step.id ? <Check className="w-3.5 h-3.5" /> : step.id}
                  </div>
                  <span className="text-sm hidden sm:inline" style={{ fontWeight: 500 }}>{step.label}</span>
                </button>
                {i < steps.length - 1 && (
                  <div className={`w-8 h-px ${currentStep > step.id ? "bg-green/30" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step content */}
          <div className="rounded-xl border border-border bg-card p-6">
            {/* Step 1: Market */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-foreground" style={{ fontWeight: 600 }}>Select Market</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Sell Token</label>
                    <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-surface-2 cursor-pointer hover:border-cyan/30">
                      <TokenIcon symbol="USDC" size="md" />
                      <div>
                        <div className="text-sm" style={{ fontWeight: 600 }}>USDC</div>
                        <div className="text-xs text-muted-foreground font-mono">0x2791...Bca1</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Buy Token</label>
                    <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-surface-2 cursor-pointer hover:border-cyan/30">
                      <TokenIcon symbol="WETH" size="md" />
                      <div>
                        <div className="text-sm" style={{ fontWeight: 600 }}>WETH</div>
                        <div className="text-xs text-muted-foreground font-mono">0x7ceB...4F93</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Timeframe</label>
                  <div className="flex items-center gap-2">
                    {["5m", "15m", "1H", "4H", "1D"].map((tf) => (
                      <button
                        key={tf}
                        className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                          tf === "1D"
                            ? "border-cyan bg-cyan/10 text-cyan"
                            : "border-border text-muted-foreground hover:border-cyan/30"
                        }`}
                        style={{ fontWeight: 500 }}
                      >
                        {tf}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Strategy Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setStrategyType("price_swap")}
                      className={`p-4 rounded-xl border text-left transition-colors ${
                        strategyType === "price_swap"
                          ? "border-cyan bg-cyan/5"
                          : "border-border hover:border-cyan/30"
                      }`}
                    >
                      <TrendingUp className="w-5 h-5 text-cyan mb-2" />
                      <div className="text-sm" style={{ fontWeight: 600 }}>Price Swap</div>
                      <div className="text-xs text-muted-foreground mt-1">Execute when price conditions are met</div>
                    </button>
                    <button
                      onClick={() => setStrategyType("dca")}
                      className={`p-4 rounded-xl border text-left transition-colors ${
                        strategyType === "dca"
                          ? "border-cyan bg-cyan/5"
                          : "border-border hover:border-cyan/30"
                      }`}
                    >
                      <svg className="w-5 h-5 text-cyan mb-2" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 17L7 10L11 13L17 3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="text-sm" style={{ fontWeight: 600 }}>DCA</div>
                      <div className="text-xs text-muted-foreground mt-1">Dollar-cost average on a schedule</div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Trigger */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-foreground" style={{ fontWeight: 600 }}>Define Trigger</h3>
                {strategyType === "dca" ? (
                  <div className="p-4 rounded-xl bg-cyan/5 border border-cyan/20">
                    <p className="text-sm text-foreground">
                      DCA strategies execute on a regular schedule. The trigger fires automatically based on the timeframe selected.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      {(["indicator", "level"] as const).map((mode) => (
                        <button
                          key={mode}
                          onClick={() => setTriggerMode(mode)}
                          className={`px-4 py-2 rounded-lg border text-sm capitalize transition-colors ${
                            triggerMode === mode
                              ? "border-cyan bg-cyan/10 text-cyan"
                              : "border-border text-muted-foreground"
                          }`}
                          style={{ fontWeight: 500 }}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                    {triggerMode === "indicator" ? (
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-muted-foreground mb-2 block">Indicator</label>
                          <select className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface-2 text-sm text-foreground">
                            <option>RSI</option>
                            <option>EMA</option>
                            <option>SMA</option>
                            <option>MACD</option>
                            <option>Bollinger Bands</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-sm text-muted-foreground mb-2 block">Length</label>
                          <input type="number" defaultValue={14} className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface-2 text-sm" />
                        </div>
                        <div>
                          <label className="text-sm text-muted-foreground mb-2 block">Operator</label>
                          <select className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface-2 text-sm text-foreground">
                            <option>&lt; Less than</option>
                            <option>&gt; Greater than</option>
                            <option>= Crosses above</option>
                            <option>= Crosses below</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-sm text-muted-foreground mb-2 block">Threshold</label>
                          <input type="number" defaultValue={30} className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface-2 text-sm" />
                        </div>
                      </div>
                    ) : (
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-muted-foreground mb-2 block">Operator</label>
                          <select className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface-2 text-sm text-foreground">
                            <option>&lt; Below price</option>
                            <option>&gt; Above price</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-sm text-muted-foreground mb-2 block">Level Price (USD)</label>
                          <input type="number" defaultValue={3200} className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface-2 text-sm" />
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {/* Step 3: Confirm */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-foreground" style={{ fontWeight: 600 }}>Confirmation Filters</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                    <div>
                      <div className="text-sm" style={{ fontWeight: 500 }}>Candle Close Confirmation</div>
                      <div className="text-xs text-muted-foreground">Wait for candle closes after trigger</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="number" defaultValue={2} className="w-16 px-3 py-2 rounded-lg border border-border bg-surface-2 text-sm text-center" />
                      <span className="text-xs text-muted-foreground">candles</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                    <div>
                      <div className="text-sm" style={{ fontWeight: 500 }}>Volume Confirmation</div>
                      <div className="text-xs text-muted-foreground">Require above-average volume</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-6 rounded-full bg-cyan cursor-pointer relative">
                        <div className="absolute right-0.5 top-0.5 w-5 h-5 rounded-full bg-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-border">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm" style={{ fontWeight: 500 }}>Volume Multiplier</div>
                    </div>
                    <input type="range" min="1" max="3" step="0.1" defaultValue="1.5" className="w-full accent-cyan" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>1x</span>
                      <span className="text-cyan" style={{ fontWeight: 500 }}>1.5x</span>
                      <span>3x</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Execution */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h3 className="text-foreground" style={{ fontWeight: 600 }}>Execution Settings</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Amount Per Execution</label>
                    <div className="flex items-center rounded-lg border border-border bg-surface-2 overflow-hidden">
                      <input type="number" defaultValue={500} className="flex-1 px-3 py-2.5 bg-transparent text-sm border-0 outline-none" />
                      <span className="px-3 text-sm text-muted-foreground border-l border-border">USDC</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Cap Total Amount</label>
                    <div className="flex items-center rounded-lg border border-border bg-surface-2 overflow-hidden">
                      <input type="number" defaultValue={5000} className="flex-1 px-3 py-2.5 bg-transparent text-sm border-0 outline-none" />
                      <span className="px-3 text-sm text-muted-foreground border-l border-border">USDC</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Max Slippage</label>
                    <div className="flex items-center rounded-lg border border-border bg-surface-2 overflow-hidden">
                      <input type="number" defaultValue={0.5} step={0.1} className="flex-1 px-3 py-2.5 bg-transparent text-sm border-0 outline-none" />
                      <span className="px-3 text-sm text-muted-foreground border-l border-border">%</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Expiry Date</label>
                    <input type="date" defaultValue="2026-04-15" className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface-2 text-sm" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Review */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <h3 className="text-foreground" style={{ fontWeight: 600 }}>Review & Approve</h3>

                {/* Rule preview */}
                <div className="rounded-xl border border-border p-4 space-y-3">
                  <h4 className="text-sm text-muted-foreground">Strategy Rules</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1.5 rounded-lg bg-cyan/10 text-cyan border border-cyan/20">USDC → WETH</span>
                    <span className="text-xs px-3 py-1.5 rounded-lg bg-muted text-foreground">Price Swap</span>
                    <span className="text-xs px-3 py-1.5 rounded-lg bg-muted text-foreground">RSI(14) &lt; 30</span>
                    <span className="text-xs px-3 py-1.5 rounded-lg bg-muted text-foreground">2 candle confirm</span>
                    <span className="text-xs px-3 py-1.5 rounded-lg bg-muted text-foreground">500 USDC / exec</span>
                    <span className="text-xs px-3 py-1.5 rounded-lg bg-muted text-foreground">5,000 USDC cap</span>
                    <span className="text-xs px-3 py-1.5 rounded-lg bg-muted text-foreground">0.5% slippage</span>
                  </div>
                </div>

                {/* Quick backtest */}
                <div className="rounded-xl border border-border p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm" style={{ fontWeight: 600 }}>Quick Backtest</h4>
                    <span className="text-xs text-muted-foreground">Approximate last 90 days</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <span className="text-[11px] text-muted-foreground">Win Rate</span>
                      <div className="text-sm font-mono text-green" style={{ fontWeight: 600 }}>67%</div>
                    </div>
                    <div>
                      <span className="text-[11px] text-muted-foreground">Trades</span>
                      <div className="text-sm font-mono" style={{ fontWeight: 600 }}>47</div>
                    </div>
                    <div>
                      <span className="text-[11px] text-muted-foreground">Net PnL</span>
                      <div className="text-sm font-mono text-green" style={{ fontWeight: 600 }}>+14.5%</div>
                    </div>
                  </div>
                  <Sparkline data={[42, 45, 43, 48, 52, 55, 53, 58, 62, 60, 65, 68, 72, 70, 75]} color="#22C55E" width={400} height={50} />
                </div>

                {/* Fee acknowledgment */}
                <div className="flex items-start gap-3 p-4 rounded-xl border border-border">
                  <input type="checkbox" className="mt-1 accent-cyan" defaultChecked />
                  <div>
                    <div className="text-sm" style={{ fontWeight: 500 }}>Service fee acknowledgment</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      A 0.3% service fee is charged only on successful executions. Failed or cancelled trades incur no fee.
                    </div>
                  </div>
                </div>

                {/* Approve & Sign card */}
                <div className="rounded-xl border border-cyan/30 bg-gradient-to-br from-cyan/5 to-transparent p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <div className="text-sm" style={{ fontWeight: 600 }}>Ready to sign</div>
                      <div className="text-xs text-muted-foreground">This will request a signature from your wallet</div>
                    </div>
                  </div>
                  <button
                    className="w-full py-3 bg-cyan text-navy rounded-xl hover:bg-cyan/90 transition-colors text-sm"
                    style={{ fontWeight: 600 }}
                  >
                    Approve & Sign
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground disabled:opacity-40 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Previous
            </button>
            {currentStep < 5 && (
              <button
                onClick={() => setCurrentStep(Math.min(5, currentStep + 1))}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-cyan text-navy text-sm hover:bg-cyan/90 transition-colors"
                style={{ fontWeight: 600 }}
              >
                Next <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Right rail */}
        <div className="hidden lg:block space-y-5">
          {/* Live preview */}
          <div className="rounded-xl border border-border bg-card p-5 sticky top-24">
            <h4 className="text-sm text-muted-foreground mb-4">Live Preview</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-1.5">
                <span className="text-xs text-muted-foreground">Pair</span>
                <span className="text-sm" style={{ fontWeight: 500 }}>USDC → WETH</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-xs text-muted-foreground">Type</span>
                <span className="text-sm" style={{ fontWeight: 500 }}>{strategyType === "dca" ? "DCA" : "Price Swap"}</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-xs text-muted-foreground">Timeframe</span>
                <span className="text-sm" style={{ fontWeight: 500 }}>1D</span>
              </div>
              {currentStep >= 2 && (
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-xs text-muted-foreground">Trigger</span>
                  <span className="text-sm" style={{ fontWeight: 500 }}>RSI(14) &lt; 30</span>
                </div>
              )}
              {currentStep >= 3 && (
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-xs text-muted-foreground">Confirmations</span>
                  <span className="text-sm" style={{ fontWeight: 500 }}>2 candles + volume</span>
                </div>
              )}
              {currentStep >= 4 && (
                <>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-xs text-muted-foreground">Amount</span>
                    <span className="text-sm font-mono" style={{ fontWeight: 500 }}>500 USDC</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-xs text-muted-foreground">Cap</span>
                    <span className="text-sm font-mono" style={{ fontWeight: 500 }}>5,000 USDC</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Security reminder */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-4 h-4 text-cyan" />
              <h4 className="text-sm text-foreground" style={{ fontWeight: 600 }}>Security</h4>
            </div>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="w-3 h-3 text-green mt-0.5 flex-shrink-0" />
                Funds stay in your wallet
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3 h-3 text-green mt-0.5 flex-shrink-0" />
                Capped spending permissions
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3 h-3 text-green mt-0.5 flex-shrink-0" />
                Revocable at any time
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3 h-3 text-green mt-0.5 flex-shrink-0" />
                Fee only on success
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
