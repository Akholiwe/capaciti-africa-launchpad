import type { AppProps } from "next/app";
import "@/styles/globals.css"; // you can leave this empty if you don't want global CSS
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // optional: enable dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Component {...pageProps} />
    </div>
  );
}
