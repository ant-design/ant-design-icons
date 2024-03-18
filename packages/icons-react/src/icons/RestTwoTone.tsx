// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RestTwoToneSvg from '@ant-design/icons-svg/lib/asn/RestTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RestTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RestTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RestTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RestTwoTone';
}

export default RefIcon;