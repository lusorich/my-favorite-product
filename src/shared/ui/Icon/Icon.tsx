import Robot from "assets/images/icons/robot";
import Signin from "assets/images/icons/signin";
import Like from "assets/images/icons/like";
import Favorite from "assets/images/icons/favorite";
import Emojies from "assets/images/icons/emojies";
import Chat from "assets/images/icons/chat";

import { ICON_NAME } from "shared/utils/constants";

const ICON_COMPONENT_BY_NAME = {
  [ICON_NAME.ROBOT]: <Robot />,
  [ICON_NAME.SIGNIN]: <Signin />,
  [ICON_NAME.LIKE]: <Like />,
  [ICON_NAME.FAVORITE]: <Favorite />,
  [ICON_NAME.EMOJIES]: <Emojies />,
  [ICON_NAME.CHAT]: <Chat />,
};

interface IconProps {
  name: ICON_NAME;
  width?: string;
  height?: string;
  fill?: string;
  viewBox?: string;
}

export const Icon = ({
  name,
  width = "12rem",
  height = "12rem",
  fill = "black",
  viewBox = "0 0 127 110",
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    {ICON_COMPONENT_BY_NAME[name]}
  </svg>
);
