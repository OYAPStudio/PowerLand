import { Zap } from "lucide-react";

export default function Logo() {
  return (
    <a href="/" className="inline-flex items-center gap-2" aria-label="PowerLand">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 shadow-md">
        <Zap className="h-5 w-5 text-white" fill="currentColor" />
      </div>
      <span className="text-lg font-bold text-gray-900 dark:text-white">
        Power<span className="text-blue-600">Land</span>
      </span>
    </a>
  );
}
