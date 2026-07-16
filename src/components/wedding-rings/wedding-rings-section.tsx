"use client";

import dynamic from "next/dynamic";
import { Component, type ErrorInfo, type ReactNode, useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { WeddingRingsFallback } from "@/components/wedding-rings/wedding-rings-fallback";

const WeddingRingsBackground = dynamic(
  () => import("@/components/wedding-rings/wedding-rings-background"),
  {
    ssr: false,
    loading: () => <WeddingRingsFallback />,
  }
);

type WeddingRingsErrorBoundaryProps = {
  children: ReactNode;
};

type WeddingRingsErrorBoundaryState = {
  hasError: boolean;
};

class WeddingRingsErrorBoundary extends Component<
  WeddingRingsErrorBoundaryProps,
  WeddingRingsErrorBoundaryState
> {
  state: WeddingRingsErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): WeddingRingsErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Wedding rings scene failed to render", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <WeddingRingsFallback status="unavailable" />;
    }

    return this.props.children;
  }
}

function detectWebGlSupport() {
  try {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
    const loseContext = context?.getExtension("WEBGL_lose_context");

    loseContext?.loseContext();
    return Boolean(context);
  } catch {
    return false;
  }
}

export function WeddingRingsSection() {
  const reducedMotion = useReducedMotion();
  const [webGlSupported, setWebGlSupported] = useState<boolean | null>(null);

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      setWebGlSupported(detectWebGlSupport());
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  if (reducedMotion) {
    return <WeddingRingsFallback status="reduced-motion" />;
  }

  if (webGlSupported === null) {
    return <WeddingRingsFallback />;
  }

  if (!webGlSupported) {
    return <WeddingRingsFallback status="unavailable" />;
  }

  return (
    <WeddingRingsErrorBoundary>
      <WeddingRingsBackground />
    </WeddingRingsErrorBoundary>
  );
}
