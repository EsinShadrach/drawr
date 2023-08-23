"use client";

import { FilledButton } from "@/utils/buttons";
import { H2 } from "@/utils/typography";
import React, { useEffect } from "react";

export default function LandingError({ error, reset }: LandingErrorProps) {
  useEffect(() => {
    console.error("LANDINGPAGE_ERROR", error);
  }, [error]);
  return (
    <div>
      <H2>Something went wrong</H2>
      <FilledButton onClick={() => reset()} className="bg-red">
        Retry
      </FilledButton>
    </div>
  );
}
