// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InteractionOutlinedSvg from '@ant-design/icons-svg/lib/asn/InteractionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InteractionOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InteractionOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(InteractionOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'InteractionOutlined';
}

export default RefIcon;