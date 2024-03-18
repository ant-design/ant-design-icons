// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AppstoreAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppstoreAddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AppstoreAddOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AppstoreAddOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AppstoreAddOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AppstoreAddOutlined';
}

export default RefIcon;