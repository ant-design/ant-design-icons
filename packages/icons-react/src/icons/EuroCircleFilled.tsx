// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EuroCircleFilledSvg from '@ant-design/icons-svg/lib/asn/EuroCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EuroCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EuroCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(EuroCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EuroCircleFilled';
}

export default RefIcon;