// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ReadOutlinedSvg from '@ant-design/icons-svg/lib/asn/ReadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ReadOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ReadOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ReadOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ReadOutlined';
}

export default RefIcon;