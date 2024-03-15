// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BulbTwoToneSvg from '@ant-design/icons-svg/lib/asn/BulbTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BulbTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BulbTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BulbTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BulbTwoTone';
}

export default RefIcon;