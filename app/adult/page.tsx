"use client";

import { env } from "@/lib/env";
import { useState } from "react";
import { NeonButton } from "@/components/ui/neon-button";

export default function AdultGatePage() {
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) {
    return (
      <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">Choose your poison</h1>
        <p className="text-slate-300">
          You are entering Nikia Renee adult content zone. Platforms below are
          run by Nikia and contain explicit material.
        </p>
        <div className="grid w-full gap-4 sm:grid-cols-2">
          <NeonButton asChild>
            <a href={env.links.ofPaid} target="_blank" rel="noreferrer">
              OnlyFans main
            </a>
          </NeonButton>
          <NeonButton asChild>
            <a href={env.links.ofFree} target="_blank" rel="noreferrer">
              OnlyFans free
            </a>
          </NeonButton>
          <NeonButton asChild>
            <a href={env.links.fansly} target="_blank" rel="noreferrer">
              Fansly
            </a>
          </NeonButton>
          <NeonButton asChild>
            <a href={env.links.pocketStars} target="_blank" rel="noreferrer">
              PocketStars
            </a>
          </NeonButton>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-6 px-4 py-20 text-center">
      <h1 className="text-3xl font-bold">Adults only</h1>
      <p className="text-slate-300">
        This section links to platforms that feature explicit adult content.
        By continuing, you confirm that you are at least 18 years old and that
        it is legal for you to view this material.
      </p>
      <div className="flex gap-4">
        <NeonButton onClick={() => setConfirmed(true)}>I am 18 plus</NeonButton>
        <button
          className="rounded-pill border border-slate-600 px-6 py-2 text-sm text-slate-300 hover:bg-slate-800"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Take me back
        </button>
      </div>
    </section>
  );
}
