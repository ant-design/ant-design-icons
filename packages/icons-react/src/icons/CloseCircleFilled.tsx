// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloseCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CloseCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloseCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CloseCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CloseCircleFilled';
}

export default RefIcon;