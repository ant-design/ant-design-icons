// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SelectOutlinedSvg from '@ant-design/icons-svg/lib/asn/SelectOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SelectOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SelectOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SelectOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SelectOutlined';
}

export default RefIcon;