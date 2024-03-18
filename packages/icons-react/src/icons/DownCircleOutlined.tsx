// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DownCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DownCircleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DownCircleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DownCircleOutlined';
}

export default RefIcon;