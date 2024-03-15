// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SlackSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/SlackSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SlackSquareOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SlackSquareOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SlackSquareOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SlackSquareOutlined';
}

export default RefIcon;