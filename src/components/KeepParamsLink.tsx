"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import type { ComponentProps } from "react";

const ALLOWED = new Set([
  "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term",
  "gclid", "gbraid", "wbraid", "fbclid", "ttclid",
]);
const SAFE_VALUE = /^[\w.~%-]{1,500}$/;

function subscribe(cb: () => void) {
  window.addEventListener("popstate", cb);
  return () => window.removeEventListener("popstate", cb);
}
function getSnapshot() { return window.location.search; }
function getServerSnapshot() { return ""; }

type Props = Omit<ComponentProps<typeof Link>, "href"> & { to: string };

export default function KeepParamsLink({ to, children, ...rest }: Props) {
  const search = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const dest = to.startsWith("/") ? to : "/";
  const destUrl = new URL(dest, "http://x");
  const src = new URLSearchParams(search);

  for (const [key, val] of src.entries()) {
    if (ALLOWED.has(key) && !destUrl.searchParams.has(key) && SAFE_VALUE.test(val)) {
      destUrl.searchParams.set(key, val);
    }
  }

  const href = destUrl.pathname + destUrl.search;

  return <Link href={href} {...rest}>{children}</Link>;
}
