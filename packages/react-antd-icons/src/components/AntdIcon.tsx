import { library, prefix } from 'antd-icons';
import * as React from 'react';

export interface IAntdIconProps {
  type: string;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
}

export default class AntdIcon extends React.Component<IAntdIconProps> {

  static displayName = 'AntdIcon';
  static NODE_ID = '__REACT_ANTD_ICONS__';

  render() {
    const { type, ...rest } = this.props;
    return (
      <svg data-icon={type} width={'1em'} height={'1em'} fill={'currentColor'} {...rest}>
        <use xlinkHref={`#${prefix}${type}`} />
      </svg>
    );
  }

  componentDidMount() {
    if (document && typeof document.getElementById === 'function') {
      const mountedNode = document.getElementById(AntdIcon.NODE_ID);
      if (!mountedNode) {
        library.dom.mount(AntdIcon.NODE_ID);
      }
    }
  }
}
