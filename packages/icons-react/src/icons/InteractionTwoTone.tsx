// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InteractionTwoToneSvg from '@ant-design/icons-svg/lib/asn/InteractionTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InteractionTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InteractionTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(InteractionTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'InteractionTwoTone';
}

export default RefIcon;