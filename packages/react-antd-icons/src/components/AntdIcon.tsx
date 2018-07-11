import { antDesignIcons, library } from 'antd-icons';
import * as React from 'react';
import { convertThunk } from '../converter';

library.add(...antDesignIcons);

export interface IAntdIconProps {
  type: string;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
}

const AntdIcon: React.SFC<IAntdIconProps> = (props) => {
  const { type, ...rest } = props;
  const target = library.definitions[type];
  if (!target) {
    if (!(process && process.env && process.env.NODE_ENV === 'production')) {
      console.error('[react-antd-icons]: Could not find icon: ', type);
    }
    return null;
  }
  return convertThunk(target, rest);
};

AntdIcon.displayName = 'AntdIcon';

export default AntdIcon;
