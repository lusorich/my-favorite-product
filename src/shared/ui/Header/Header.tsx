import { ICON_NAME } from 'shared/utils/constants';
import { Icon } from '../Icon/Icon';
import { Signin } from 'features/auth';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <header class={s.header}>
      <div>
        <Icon name={ICON_NAME.ROBOT} />
      </div>
      <div class={s.signinBlock}>
        <Signin />
      </div>
    </header>
  );
};
