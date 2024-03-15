// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FormatPainterOutlinedSvg from '@ant-design/icons-svg/lib/asn/FormatPainterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FormatPainterOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FormatPainterOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FormatPainterOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FormatPainterOutlined';
}

export default RefIcon;