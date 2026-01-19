"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  className,
  once = true,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);
  const isInView = useInView(ref, { once, margin: "-50px 0px" });
  const shouldReduceMotion = useReducedMotion();

  const spring = useSpring(0, {
    duration: shouldReduceMotion ? 0 : duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => {
    // Handle decimals if value has them
    if (value % 1 !== 0) {
      return Math.floor(current * 10) / 10;
    }
    return Math.floor(current);
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      if (shouldReduceMotion) {
        spring.jump(value);
      } else {
        spring.set(value);
      }
    }
  }, [isInView, value, spring, shouldReduceMotion]);

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => {
      setDisplayValue(v);
    });
    return () => unsubscribe();
  }, [display]);

  // Format the display value
  const formattedValue = displayValue.toLocaleString("en-US");

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}

// Variant that parses a string like "$20M+" and animates the number
interface CountUpFromStringProps {
  value: string;
  className?: string;
  duration?: number;
}

export function CountUpFromString({
  value,
  className,
  duration = 2,
}: CountUpFromStringProps) {
  // Parse the string to extract prefix, number, and suffix
  const match = value.match(/^([^0-9]*)([0-9,.]+)(.*)$/);

  if (!match) {
    return <span className={className}>{value}</span>;
  }

  const [, prefix, numberStr, suffix] = match;
  const number = parseFloat(numberStr.replace(/,/g, ""));

  return (
    <CountUp
      value={number}
      prefix={prefix}
      suffix={suffix}
      duration={duration}
      className={className}
    />
  );
}

export default CountUp;
