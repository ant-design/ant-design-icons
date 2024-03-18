// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SafetyCertificateOutlinedSvg from '@ant-design/icons-svg/lib/asn/SafetyCertificateOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SafetyCertificateOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SafetyCertificateOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SafetyCertificateOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SafetyCertificateOutlined';
}

export default RefIcon;