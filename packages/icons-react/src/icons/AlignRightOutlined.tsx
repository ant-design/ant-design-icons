// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlignRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlignRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlignRightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlignRightOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AlignRightOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AlignRightOutlined';
}

export default RefIcon;