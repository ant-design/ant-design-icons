// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SortAscendingOutlinedSvg from '@ant-design/icons-svg/lib/asn/SortAscendingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SortAscendingOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SortAscendingOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SortAscendingOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SortAscendingOutlined';
}

export default RefIcon;