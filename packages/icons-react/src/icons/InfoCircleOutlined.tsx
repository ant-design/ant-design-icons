// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InfoCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/InfoCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InfoCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InfoCircleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(InfoCircleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'InfoCircleOutlined';
}

export default RefIcon;