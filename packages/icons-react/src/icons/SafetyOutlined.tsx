// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SafetyOutlinedSvg from '@ant-design/icons-svg/lib/asn/SafetyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SafetyOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SafetyOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SafetyOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SafetyOutlined';
}

export default RefIcon;