import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type CardProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Card<T extends ElementType = "div">({
  as,
  className = "",
  children,
  ...rest
}: CardProps<T>) {
  const Component = as || "div";
  const classes = ["card", className].filter(Boolean).join(" ");
  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}

export default Card;
