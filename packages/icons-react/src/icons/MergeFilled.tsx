// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MergeFilledSvg from '@ant-design/icons-svg/lib/asn/MergeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MergeFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MergeFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MergeFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MergeFilled';
}

export default RefIcon;