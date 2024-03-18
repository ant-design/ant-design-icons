// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HighlightFilledSvg from '@ant-design/icons-svg/lib/asn/HighlightFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HighlightFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HighlightFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(HighlightFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'HighlightFilled';
}

export default RefIcon;