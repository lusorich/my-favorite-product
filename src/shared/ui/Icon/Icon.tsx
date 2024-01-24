import Robot from 'assets/images/icons/robot';
import Signin from 'assets/images/icons/signin';
import Like from 'assets/images/icons/like';
import Favorite from 'assets/images/icons/favorite';
import Emojies from 'assets/images/icons/emojies';
import Chat from 'assets/images/icons/chat';

import { ICON_NAME } from 'shared/utils/constants';

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

export const Icon = (props: IconProps) => (
  <svg
    width={props.width || '12rem'}
    height={props.height || '12rem'}
    viewBox={props.viewBox || '0 0 127 110'}
    fill={props.fill || 'black'}
    xmlns="http://www.w3.org/2000/svg"
  >
    {ICON_COMPONENT_BY_NAME[props.name]}
  </svg>
);
