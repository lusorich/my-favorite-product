import { Icon } from "shared/ui/Icon/Icon";
import { ICON_NAME } from "shared/utils/constants";
import s from "./Signin.module.scss";

export const Signin = () => {
  return (
    <div class={s.signin}>
      <button class={s.btn}>
        <span>Войти</span>
        <Icon
          name={ICON_NAME.SIGNIN}
          width="4rem"
          height="3.2rem"
          viewBox="0 0 50 44"
        />
      </button>
    </div>
  );
};
