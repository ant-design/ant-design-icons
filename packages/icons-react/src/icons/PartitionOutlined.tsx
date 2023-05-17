// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PartitionOutlinedSvg from '@ant-design/icons-svg/lib/asn/PartitionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PartitionOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PartitionOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PartitionOutlined.displayName = 'PartitionOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PartitionOutlined);