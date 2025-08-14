import React from "react";
import { cn } from "../utils/classname";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;

  ref?: React.LegacyRef<HTMLElement>;
} & React.HTMLAttributes<HTMLElement>;

const Container = ({
  className,
  children,
  as = "div",
  ref,
  ...rest
}: ContainerProps) => {
  const Tag = as;

  return (
    <Tag ref={ref} className={cn(" ", className)} {...rest}>
      {children}
    </Tag>
  );
};

Container.displayName = "Container";

export default Container;
