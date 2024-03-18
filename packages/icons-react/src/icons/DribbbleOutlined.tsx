// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DribbbleOutlinedSvg from '@ant-design/icons-svg/lib/asn/DribbbleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DribbbleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DribbbleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DribbbleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DribbbleOutlined';
}

export default RefIcon;