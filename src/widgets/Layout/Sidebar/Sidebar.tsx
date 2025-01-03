import styles from "./Sidebar.module.css";
import cn from "classnames";
import { SidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";
import Logo from "../logo.svg";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <aside {...props} className={cn(className, styles.sidebar)}>
      <Logo aria-label="Логотип" className={styles.logo} />
      <div>Поиск</div>
      <Menu />
    </aside>
  );
};
