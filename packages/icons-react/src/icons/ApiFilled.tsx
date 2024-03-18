// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ApiFilledSvg from '@ant-design/icons-svg/lib/asn/ApiFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ApiFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ApiFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ApiFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ApiFilled';
}

export default RefIcon;