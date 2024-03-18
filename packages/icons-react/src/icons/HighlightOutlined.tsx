// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HighlightOutlinedSvg from '@ant-design/icons-svg/lib/asn/HighlightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HighlightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HighlightOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(HighlightOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'HighlightOutlined';
}

export default RefIcon;