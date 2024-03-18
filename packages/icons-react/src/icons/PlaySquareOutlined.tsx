// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlaySquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlaySquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlaySquareOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlaySquareOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PlaySquareOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlaySquareOutlined';
}

export default RefIcon;