// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SketchOutlinedSvg from '@ant-design/icons-svg/lib/asn/SketchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SketchOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SketchOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SketchOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SketchOutlined';
}

export default RefIcon;