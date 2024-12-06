import { ButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.css";
import Image from "next/image";
import ArrowIcon from "./arrow.svg";
export const Button = ({
  children,
  appearance,
  className,
  arrow = "none",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        >
          <Image src={ArrowIcon} alt="Arrow icon" />
        </span>
      )}
    </button>
  );
};
