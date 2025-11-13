import type { ReactNode } from "react";
import { MainNav } from "@/components/nav/main-nav";
import "@/styles/globals.css";

export default function SfwLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-bg text-slate-50">
        <div className="flex min-h-screen flex-col">
          <MainNav />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-slate-800 p-4 text-center text-xs text-slate-400">
            Nikia Renee Creator HQ · Built by Who Visions
          </footer>
        </div>
      </body>
    </html>
  );
}
