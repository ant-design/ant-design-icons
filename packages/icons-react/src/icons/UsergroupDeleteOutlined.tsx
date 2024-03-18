// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UsergroupDeleteOutlinedSvg from '@ant-design/icons-svg/lib/asn/UsergroupDeleteOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UsergroupDeleteOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UsergroupDeleteOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(UsergroupDeleteOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UsergroupDeleteOutlined';
}

export default RefIcon;