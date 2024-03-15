// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FormatPainterFilledSvg from '@ant-design/icons-svg/lib/asn/FormatPainterFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FormatPainterFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FormatPainterFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FormatPainterFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FormatPainterFilled';
}

export default RefIcon;