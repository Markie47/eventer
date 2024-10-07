"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ClientComponent() {
  return (
    <Button size="lg" asChild className="button w-full sm:w-fit">
      <Link href="#events">
        Explore Now
      </Link>
    </Button>
  );
}

