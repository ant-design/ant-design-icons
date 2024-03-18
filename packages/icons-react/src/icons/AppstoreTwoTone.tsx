// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AppstoreTwoToneSvg from '@ant-design/icons-svg/lib/asn/AppstoreTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AppstoreTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AppstoreTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AppstoreTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AppstoreTwoTone';
}

export default RefIcon;