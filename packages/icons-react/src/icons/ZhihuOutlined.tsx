// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ZhihuOutlinedSvg from '@ant-design/icons-svg/lib/asn/ZhihuOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZhihuOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ZhihuOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ZhihuOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ZhihuOutlined';
}

export default RefIcon;