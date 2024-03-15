// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CodepenCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CodepenCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodepenCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodepenCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CodepenCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CodepenCircleFilled';
}

export default RefIcon;