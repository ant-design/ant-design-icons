import { IconDefinition, library } from 'antd-icons';
import * as React from 'react';
import { convertThunk } from '../converter';

export interface IAntdIconProps {
  type: string | IconDefinition;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
}

const AntdIcon: React.SFC<IAntdIconProps> = (props) => {
  const { type, ...rest } = props;
  let target: IconDefinition | null = null;
  if (isIconDefinition(type)) {
    target = type;
  } else if (typeof type === 'string') {
    target = library.definitions[type];
    if (!target) {
      if (!(process && process.env && process.env.NODE_ENV === 'production')) {
        console.error('[react-antd-icons]: Could not find icon:', type);
      }
      return null;
    }
  }
  if (!target) {
    if (!(process && process.env && process.env.NODE_ENV === 'production')) {
      console.error('[react-antd-icons]: type should be string or icon definiton, but got', type);
    }
    return null;
  }
  return convertThunk(target, rest);
};

function isIconDefinition(target: any): target is IconDefinition {
  return typeof target === 'object' && target.name && target.width && Array.isArray(target.children);
}

AntdIcon.displayName = 'AntdIcon';

export default AntdIcon;
