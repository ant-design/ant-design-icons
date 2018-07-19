import { IconDefinition } from '@ant-design/icons';
import * as React from 'react';
import { convertThunk } from '../converter';
import { Library } from '../library';
import { isIconDefinition, log } from '../utils';

export interface AntdIconProps {
  type: string | IconDefinition;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
}

class AntdIcon extends React.Component<AntdIconProps> {

  static library = new Library();
  static displayName = 'AntdIcon';

  render() {
    const { type, ...rest } = this.props;
    let target: IconDefinition | undefined;
    if (isIconDefinition(type)) {
      target = type;
    } else if (typeof type === 'string') {
      target = AntdIcon.library.get(type);
      if (!target) {
        log(`Could not find icon: ${type}`);
        return null;
      }
    }
    if (!target) {
      log(`type should be string or icon definiton, but got ${type}`);
      return null;
    }
    return convertThunk(target, rest);
  }
}

export default AntdIcon;
