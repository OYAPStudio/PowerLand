import { Zap } from "lucide-react";

export default function Logo() {
  return (
    <a href="/" className="inline-flex items-center gap-2" aria-label="PowerLand">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 shadow-md">
        <Zap className="h-5 w-5 text-white" fill="currentColor" />
      </div>
      <span className="text-lg font-bold text-gray-900 dark:text-white">
        Power<span className="text-amber-500">Land</span>
      </span>
    </a>
  );
}
