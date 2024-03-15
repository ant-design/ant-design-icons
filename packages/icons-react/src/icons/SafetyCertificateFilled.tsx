// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SafetyCertificateFilledSvg from '@ant-design/icons-svg/lib/asn/SafetyCertificateFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SafetyCertificateFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SafetyCertificateFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SafetyCertificateFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SafetyCertificateFilled';
}

export default RefIcon;