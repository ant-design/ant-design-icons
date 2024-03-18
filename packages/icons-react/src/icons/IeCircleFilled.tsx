// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import IeCircleFilledSvg from '@ant-design/icons-svg/lib/asn/IeCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IeCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IeCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(IeCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'IeCircleFilled';
}

export default RefIcon;