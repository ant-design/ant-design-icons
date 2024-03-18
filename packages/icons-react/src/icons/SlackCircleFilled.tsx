// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SlackCircleFilledSvg from '@ant-design/icons-svg/lib/asn/SlackCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SlackCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SlackCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SlackCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SlackCircleFilled';
}

export default RefIcon;