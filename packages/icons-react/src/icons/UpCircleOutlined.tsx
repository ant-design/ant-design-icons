// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UpCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/UpCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UpCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UpCircleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(UpCircleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UpCircleOutlined';
}

export default RefIcon;