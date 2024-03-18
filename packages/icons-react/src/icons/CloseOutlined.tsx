// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloseOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloseOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CloseOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CloseOutlined';
}

export default RefIcon;