import { HTMLAttributes, ReactNode } from "react";

type BasicDivProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
};

export function FadeIn({ children, className = "", ...props }: BasicDivProps) {
  const { delay: _delay, direction: _direction, duration: _duration, ...rest } = props;
  return <div className={`perf-fade ${className}`.trim()} {...rest}>{children}</div>;
}

export function StaggerContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  staggerChildren?: number;
  className?: string;
}) {
  return <div className={`perf-fade ${className}`.trim()}>{children}</div>;
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
