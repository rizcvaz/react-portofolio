import { useEffect, useState, type ReactNode } from "react";

interface WaveLoaderProps {
  bars?: number;
  height?: number;
  barWidth?: number;
  gap?: number;
  color?: string;
  label?: string;
  className?: string;
}

export function WaveLoader({
  bars = 5,
  height = 40,
  barWidth = 6,
  gap = 6,
  color = "#6366f1",
  label,
  className = "",
}: WaveLoaderProps) {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      <div
        className="flex items-end"
        style={{ gap: `${gap}px`, height: `${height}px` }}
        role="status"
        aria-label="Loading"
      >
        {Array.from({ length: bars }).map((_, i) => (
          <span
            key={i}
            className="wave-loader-bar block rounded-full"
            style={{
              width: `${barWidth}px`,
              height: `${height}px`,
              backgroundColor: color,
              animationDelay: `${i * 0.12}s`,
            }}
          />
        ))}
      </div>
      {label && <p className="text-sm text-gray-500">{label}</p>}
    </div>
  );
}

interface PreloaderProps {
  /** Durasi preloader dalam milidetik */
  duration?: number;
  /** Konten utama yang ditampilkan setelah preloader selesai */
  children: ReactNode;
}

export function Preloader({ duration = 1500, children }: PreloaderProps) {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

 useEffect(() => {
  let fadeTimer: ReturnType<typeof setTimeout>;
  const timer = setTimeout(() => {
    setFading(true);
    fadeTimer = setTimeout(() => setLoading(false), 400);
  }, duration);

  return () => {
    clearTimeout(timer);
    clearTimeout(fadeTimer);
  };
}, [duration]);

  if (loading) {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-400 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
      >
        <WaveLoader label="Memuat..." />
      </div>
    );
  }

  return <>{children}</>;
}