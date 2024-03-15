// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InteractionFilledSvg from '@ant-design/icons-svg/lib/asn/InteractionFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InteractionFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InteractionFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(InteractionFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'InteractionFilled';
}

export default RefIcon;