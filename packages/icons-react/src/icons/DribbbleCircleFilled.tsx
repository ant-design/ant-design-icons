// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DribbbleCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DribbbleCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DribbbleCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DribbbleCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DribbbleCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DribbbleCircleFilled';
}

export default RefIcon;