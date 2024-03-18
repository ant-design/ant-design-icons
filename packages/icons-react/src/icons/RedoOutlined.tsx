// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RedoOutlinedSvg from '@ant-design/icons-svg/lib/asn/RedoOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RedoOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RedoOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RedoOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RedoOutlined';
}

export default RefIcon;