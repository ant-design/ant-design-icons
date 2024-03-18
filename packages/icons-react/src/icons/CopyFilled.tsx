// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CopyFilledSvg from '@ant-design/icons-svg/lib/asn/CopyFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopyFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CopyFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CopyFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CopyFilled';
}

export default RefIcon;