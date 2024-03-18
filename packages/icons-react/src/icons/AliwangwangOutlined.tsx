// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AliwangwangOutlinedSvg from '@ant-design/icons-svg/lib/asn/AliwangwangOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AliwangwangOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AliwangwangOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AliwangwangOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AliwangwangOutlined';
}

export default RefIcon;