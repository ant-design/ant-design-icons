// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlayCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PlayCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlayCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlayCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PlayCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlayCircleFilled';
}

export default RefIcon;