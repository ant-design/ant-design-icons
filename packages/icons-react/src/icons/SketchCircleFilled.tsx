// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SketchCircleFilledSvg from '@ant-design/icons-svg/lib/asn/SketchCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SketchCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SketchCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SketchCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SketchCircleFilled';
}

export default RefIcon;