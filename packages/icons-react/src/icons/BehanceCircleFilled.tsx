// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BehanceCircleFilledSvg from '@ant-design/icons-svg/lib/asn/BehanceCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BehanceCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BehanceCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BehanceCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BehanceCircleFilled';
}

export default RefIcon;