// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CopyrightCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CopyrightCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopyrightCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CopyrightCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CopyrightCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CopyrightCircleFilled';
}

export default RefIcon;