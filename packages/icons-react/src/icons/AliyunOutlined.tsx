// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AliyunOutlinedSvg from '@ant-design/icons-svg/lib/asn/AliyunOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AliyunOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AliyunOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AliyunOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AliyunOutlined';
}

export default RefIcon;