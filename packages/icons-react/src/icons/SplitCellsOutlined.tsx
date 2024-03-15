// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SplitCellsOutlinedSvg from '@ant-design/icons-svg/lib/asn/SplitCellsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SplitCellsOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SplitCellsOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SplitCellsOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SplitCellsOutlined';
}

export default RefIcon;