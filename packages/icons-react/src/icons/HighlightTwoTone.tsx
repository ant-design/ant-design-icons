// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HighlightTwoToneSvg from '@ant-design/icons-svg/lib/asn/HighlightTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HighlightTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HighlightTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(HighlightTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'HighlightTwoTone';
}

export default RefIcon;