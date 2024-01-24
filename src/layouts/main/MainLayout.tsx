import { JSXElement } from 'solid-js';
import s from './MainLayout.module.scss';

interface MainLayoutProps {
  children: JSXElement;
}

export const MainLayout = (props: MainLayoutProps) => (
  <div class={s.mainLayout}>{props.children}</div>
);
