// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MedicineBoxFilledSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MedicineBoxFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MedicineBoxFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MedicineBoxFilled.displayName = 'MedicineBoxFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MedicineBoxFilled);