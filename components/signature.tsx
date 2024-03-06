"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { defaultAuthor } from "@/lib/metadata";

export function Signature() {
  return (
    <Link href="/" aria-label="Go to Home">
      <Image
        className="duration-300 group-hover:scale-110"
        width={120}
        height={120}
        src="/logo-light.svg"
        alt={defaultAuthor.name}
      />
    </Link>
  );
}
