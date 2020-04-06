import * as React from 'react';
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

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757#issuecomment-488848720
interface IconBaseComponent<Props> extends React.ForwardRefExoticComponent<
  Props & React.RefAttributes<HTMLSpanElement>
> {
  getTwoToneColor: typeof getTwoToneColor;
  setTwoToneColor: typeof setTwoToneColor;
}

const Icon = React.forwardRef<HTMLSpanElement, IconComponentProps>((props, ref) => {
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
      ref={ref}
      tabIndex={iconTabIndex}
      onClick={onClick}
      className={classString}
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
}) as IconBaseComponent<IconComponentProps>;

Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;

export default Icon;
