// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BehanceSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/BehanceSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BehanceSquareOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BehanceSquareOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BehanceSquareOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BehanceSquareOutlined';
}

export default RefIcon;