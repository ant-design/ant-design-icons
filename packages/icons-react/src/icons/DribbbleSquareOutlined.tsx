// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DribbbleSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/DribbbleSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DribbbleSquareOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DribbbleSquareOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DribbbleSquareOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DribbbleSquareOutlined';
}

export default RefIcon;