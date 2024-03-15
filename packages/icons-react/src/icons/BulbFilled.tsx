// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BulbFilledSvg from '@ant-design/icons-svg/lib/asn/BulbFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BulbFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BulbFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BulbFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BulbFilled';
}

export default RefIcon;