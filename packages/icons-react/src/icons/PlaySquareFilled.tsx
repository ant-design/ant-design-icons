// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlaySquareFilledSvg from '@ant-design/icons-svg/lib/asn/PlaySquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlaySquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlaySquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PlaySquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlaySquareFilled';
}

export default RefIcon;