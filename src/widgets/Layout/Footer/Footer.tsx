import cn from "classnames";
import { FooterProps } from "./Footer.props";
import { format } from "date-fns";
import classNames from "classnames";
import style from "./Footer.module.css";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, style.footer)} {...props}>
      <div>OwlTop © 2020-{format(new Date(), "yyyy")} Все права защищены</div>
      <nav>
        <ul className={style.list}>
          <li className={style.item}>
            <a href="#" target="_blank">
              Пользовательское
            </a>
          </li>
          <li className={style.item}>
            <a href="#" target="_blank">
              Политика конфиденциальности
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
