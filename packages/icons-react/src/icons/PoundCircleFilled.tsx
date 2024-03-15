// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PoundCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PoundCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PoundCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PoundCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PoundCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PoundCircleFilled';
}

export default RefIcon;