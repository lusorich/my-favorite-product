import { ICON_NAME } from "shared/utils/constants";
import { Icon } from "../Icon/Icon";

export const Header = () => {
  return (
    <header>
      <div>
        <Icon name={ICON_NAME.ROBOT} />
      </div>
      <div>
        <button>Войти</button>

        <Icon
          name={ICON_NAME.SIGNIN}
          width="4rem"
          height="3.2rem"
          viewBox="0 0 50 44"
        />
      </div>
    </header>
  );
};
