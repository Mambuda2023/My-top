import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";
export const Tag = ({
  children,
  size = "m",
  className,
  href,
  color = "ghost",
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.ghost]: color === "ghost",
        [styles.primary]: color === "primary",
        [styles.green]: color === "green",
        [styles.gray]: color === "gray",
        [styles.red]: color === "red",
      })}
      {...props}
    >
      {href ? <a href="">{children}</a> : <></>}
      {children}
    </div>
  );
};
