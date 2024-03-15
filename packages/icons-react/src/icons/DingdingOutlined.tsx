// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DingdingOutlinedSvg from '@ant-design/icons-svg/lib/asn/DingdingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DingdingOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DingdingOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DingdingOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DingdingOutlined';
}

export default RefIcon;