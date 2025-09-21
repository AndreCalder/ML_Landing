"use client";

import { useEffect } from "react";
import { useAnimate } from "framer-motion";

export default function FMAnimationProvider({ children }: { children: React.ReactNode }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const root = scope.current ?? document.body;

    const isEligible = (el: Element) => {
      if (!(el instanceof HTMLDivElement)) return false;
      const target = el as HTMLElement;
      if (target.hasAttribute("data-no-anim")) return false;
      if (target.closest("[data-no-anim]")) return false;
      if (target.classList.contains("toaster") || target.closest(".toaster")) return false;
      return true;
    };

    const prepare = (el: Element) => {
      if (!isEligible(el)) return;
      const target = el as HTMLElement;
      target.style.opacity = target.style.opacity || "0";
    };

    root.querySelectorAll("div").forEach(prepare);

    const onIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        if (!isEligible(target)) return;
        if (entry.isIntersecting) {
          animate(target, { opacity: 1 }, { duration: 0.6, ease: [0.22, 1, 0.36, 1] });
          observer.unobserve(target);
        }
      });
    };

    const observer = new IntersectionObserver(onIntersect, { threshold: 0.1, rootMargin: "0px 0px -10% 0px" });

    root.querySelectorAll("div").forEach((el: Element) => {
      if (isEligible(el)) observer.observe(el);
    });

    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (isEligible(node)) {
            prepare(node);
            observer.observe(node);
          }
          node.querySelectorAll?.("div").forEach((child) => {
            prepare(child);
            if (isEligible(child)) observer.observe(child);
          });
        });
      }
    });

    mutationObserver.observe(root, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [animate, scope]);

  return <div ref={scope as any}>{children}</div>;
}


