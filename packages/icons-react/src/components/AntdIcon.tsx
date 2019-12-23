import React from 'react';
import classNames from 'classnames';
import { IconDefinition } from '@ant-design/icons-svg/lib/types';

import { IconBaseProps } from './Icon';
import ReactIcon from './IconBase';
import { getTwoToneColor, TwoToneColor, setTwoToneColor } from './twoTonePrimaryColor';
import { normalizeTwoToneColors } from '../utils';

export interface AntdIconProps extends IconBaseProps {
  twoToneColor?: TwoToneColor;
}

export interface IconComponentProps extends AntdIconProps {
  icon: IconDefinition;
}

// Initial setting
// should move it to antd main repo?
setTwoToneColor('#1890ff');

interface IconBaseComponent<P> extends React.FC<P> {
  getTwoToneColor: typeof getTwoToneColor;
  setTwoToneColor: typeof setTwoToneColor;
}

const Icon: IconBaseComponent<IconComponentProps> = (
  props,
  ref: React.MutableRefObject<HTMLInputElement>,
) => {
  const {
    // affect outter <i>...</i>
    className,

    // affect inner <svg>...</svg>
    icon,
    spin,
    rotate,

    tabIndex,
    onClick,

    // other
    twoToneColor,

    ...restProps
  } = props;

  const classString = classNames(
    'anticon',
    { [`anticon-${icon.name}`]: Boolean(icon.name) },
    className,
  );

  const svgClassString = classNames({
    'anticon-spin': !!spin || icon.name === 'loading',
  });

  let iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  const svgStyle = rotate
    ? {
        msTransform: `rotate(${rotate}deg)`,
        transform: `rotate(${rotate}deg)`,
      }
    : undefined;

  const [primaryColor, secondaryColor] = normalizeTwoToneColors(twoToneColor);

  return (
    <span
      role="img"
      aria-label={icon.name}
      {...restProps}
      tabIndex={iconTabIndex}
      onClick={onClick}
      className={classString}
      ref={ref}
    >
      <ReactIcon
        className={svgClassString}
        icon={icon}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        style={svgStyle}
      />
    </span>
  );
}

Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;

export default React.forwardRef<HTMLSpanElement, IconComponentProps>(Icon);
