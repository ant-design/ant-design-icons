// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SaveFilledSvg from '@ant-design/icons-svg/lib/asn/SaveFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SaveFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SaveFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SaveFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SaveFilled';
}

export default RefIcon;