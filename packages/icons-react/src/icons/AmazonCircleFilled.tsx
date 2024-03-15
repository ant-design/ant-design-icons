// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AmazonCircleFilledSvg from '@ant-design/icons-svg/lib/asn/AmazonCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AmazonCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AmazonCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AmazonCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AmazonCircleFilled';
}

export default RefIcon;