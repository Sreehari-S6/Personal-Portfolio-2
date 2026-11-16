
import { useEffect, useState } from "react";

interface TerminalLoaderProps {
  onComplete: () => void;
}

const bootMessages = [
  "initializing shell boot system...",
  "establishing ssh connection to local_matrix... ok",
  "loading libraries: outfit & inter sans-serif typography... ok",
  "injecting custom layout: matte slate portfolio v3.5.2... ok",
  "querying skills database: php, python/django, mysql, react... ok",
  "initializing React application modules... ok",
  "mounting portfolio interface... ok",
];

function TerminalLoader({ onComplete }: TerminalLoaderProps) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => setTimeout(resolve, ms));

    const runTerminal = async () => {
      for (let i = 0; i < bootMessages.length; i++) {
        const message = bootMessages[i];

        // Type each command character by character
        for (let j = 1; j <= message.length; j++) {
          if (cancelled) return;

          setCurrentLine(message.slice(0, j));

          // Update progress smoothly
          const currentProgress =
            ((i + j / message.length) / bootMessages.length) * 100;

          setProgress(Math.round(currentProgress));

          await sleep(2);
        }

        if (cancelled) return;

        // Move completed command into terminal history
        setVisibleLines((previous) => [...previous, message]);
        setCurrentLine("");

        await sleep(25);
      }

      if (cancelled) return;

      setProgress(100);
      setCurrentLine("portfolio initialization complete... ok");

      await sleep(150);

      if (cancelled) return;

      // Fade out terminal
      setIsExiting(true);

      await sleep(450);

      if (!cancelled) {
        onComplete();
      }
    };

    runTerminal();

    return () => {
      cancelled = true;
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#030506] px-4 transition-opacity duration-500 ${
        isExiting
          ? "pointer-events-none opacity-0"
          : "opacity-100"
      }`}
    >
      <div className="w-full max-w-[750px] overflow-hidden rounded-2xl border border-emerald-900/50 bg-[#0b0d12] shadow-2xl shadow-black/50">

        {/* Terminal Header */}
        <div className="flex h-[58px] items-center gap-3 border-b border-white/[0.07] bg-[#101117] px-6">
          <div className="flex gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#292b34]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#292b34]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#292b34]" />
          </div>

          <span className="font-mono text-xs tracking-wide text-slate-500">
            system_boot.sh
          </span>
        </div>

        {/* Terminal Output */}
        <div className="min-h-[300px] px-6 py-7 sm:px-8 sm:py-8">
          <div className="space-y-3 break-words font-mono text-[11px] leading-relaxed text-slate-300 sm:text-sm">

            {visibleLines.map((message, index) => (
              <div key={index}>
                <span className="mr-2 text-slate-400">&gt;</span>
                {message}
              </div>
            ))}

            {currentLine && (
              <div>
                <span className="mr-2 text-slate-400">&gt;</span>
                {currentLine}
                <span className="ml-0.5 inline-block h-4 w-1.5 animate-pulse bg-emerald-400 align-middle" />
              </div>
            )}

          </div>
        </div>

        {/* Progress Section */}
        <div className="border-t border-dashed border-emerald-900/40 px-6 py-7 sm:px-8">
          <div className="flex items-center gap-6">

            <div className="h-[5px] flex-1 overflow-hidden rounded-full bg-[#172126]">
              <div
                className="h-full rounded-full bg-emerald-400 transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="w-10 text-right font-mono text-sm font-semibold text-emerald-400">
              {progress}%
            </span>

          </div>
        </div>

      </div>
    </div>
  );
}

export default TerminalLoader;
