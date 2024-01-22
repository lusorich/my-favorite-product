import { JSXElement } from "solid-js";
import s from "./MainLayout.module.scss";

interface MainLayoutProps {
  children: JSXElement;
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <div class={s.mainLayout}>{children}</div>
);
