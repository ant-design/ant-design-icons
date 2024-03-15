// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HomeFilledSvg from '@ant-design/icons-svg/lib/asn/HomeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomeFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HomeFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(HomeFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'HomeFilled';
}

export default RefIcon;