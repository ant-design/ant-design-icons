// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SlackOutlinedSvg from '@ant-design/icons-svg/lib/asn/SlackOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SlackOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SlackOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SlackOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SlackOutlined';
}

export default RefIcon;