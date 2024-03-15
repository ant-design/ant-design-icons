// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FullscreenExitOutlinedSvg from '@ant-design/icons-svg/lib/asn/FullscreenExitOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FullscreenExitOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FullscreenExitOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FullscreenExitOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FullscreenExitOutlined';
}

export default RefIcon;