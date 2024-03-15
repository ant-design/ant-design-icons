// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SaveTwoToneSvg from '@ant-design/icons-svg/lib/asn/SaveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SaveTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SaveTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SaveTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SaveTwoTone';
}

export default RefIcon;