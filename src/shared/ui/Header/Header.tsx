import { ICON_NAME } from "shared/utils/constants";
import { Icon } from "../Icon/Icon";

export const Header = () => {
  return (
    <header>
      <div>
        <Icon name={ICON_NAME.ROBOT} />
      </div>
      <div>signin</div>
    </header>
  );
};
