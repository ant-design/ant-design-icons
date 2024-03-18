// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SortDescendingOutlinedSvg from '@ant-design/icons-svg/lib/asn/SortDescendingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SortDescendingOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SortDescendingOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SortDescendingOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SortDescendingOutlined';
}

export default RefIcon;