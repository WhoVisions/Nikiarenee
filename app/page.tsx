"use client";

import { env } from "@/lib/env";
import { NeonButton } from "@/components/ui/neon-button";

export default function HomePage() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-16 text-center">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-teal">
          Cosplay Queen · Gamer · Creator
        </p>
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
          {env.nikiaName}
        </h1>
        <p className="max-w-2xl text-slate-300">
          High energy cosplay, sweaty game nights, and a whole lot of pink.
          This is the home base for everything Nikia does on and off stream.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <NeonButton asChild>
          <a href={env.links.igMain} target="_blank" rel="noreferrer">
            Cosplay Instagram
          </a>
        </NeonButton>
        <NeonButton asChild>
          <a href={env.links.twitch} target="_blank" rel="noreferrer">
            Watch on Twitch
          </a>
        </NeonButton>
        <button
          className="rounded-pill border border-brand-teal px-6 py-2 text-sm font-semibold text-brand-teal hover:bg-brand-teal/10"
          onClick={() => {
            window.location.href = "/adult";
          }}
        >
          18 plus content
        </button>
      </div>
    </section>
  );
}
