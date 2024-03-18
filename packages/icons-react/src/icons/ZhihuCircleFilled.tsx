// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ZhihuCircleFilledSvg from '@ant-design/icons-svg/lib/asn/ZhihuCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZhihuCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ZhihuCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ZhihuCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ZhihuCircleFilled';
}

export default RefIcon;