// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MedicineBoxOutlinedSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MedicineBoxOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MedicineBoxOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MedicineBoxOutlined.displayName = 'MedicineBoxOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MedicineBoxOutlined);