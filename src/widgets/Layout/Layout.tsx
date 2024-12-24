import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import style from "./Layout.module.css";
import { LayoutProps } from "./Layout.props";
import { FunctionComponent } from "react";

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <div className={style.wrapper}>
      <Header className={style.header} />
      <Sidebar className={style.sidebar} />
      <main className={style.body}>{children}</main>
      <Footer className={style.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
