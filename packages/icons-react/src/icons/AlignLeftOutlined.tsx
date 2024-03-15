// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlignLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlignLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlignLeftOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlignLeftOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AlignLeftOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AlignLeftOutlined';
}

export default RefIcon;