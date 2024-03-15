// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UsergroupAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/UsergroupAddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UsergroupAddOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UsergroupAddOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(UsergroupAddOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UsergroupAddOutlined';
}

export default RefIcon;