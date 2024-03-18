// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import YuqueFilledSvg from '@ant-design/icons-svg/lib/asn/YuqueFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const YuqueFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={YuqueFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(YuqueFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'YuqueFilled';
}

export default RefIcon;