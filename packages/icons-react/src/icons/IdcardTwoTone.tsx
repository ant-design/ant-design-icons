// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import IdcardTwoToneSvg from '@ant-design/icons-svg/lib/asn/IdcardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IdcardTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IdcardTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(IdcardTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'IdcardTwoTone';
}

export default RefIcon;