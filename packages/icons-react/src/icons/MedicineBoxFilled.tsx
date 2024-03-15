// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MedicineBoxFilledSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MedicineBoxFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MedicineBoxFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MedicineBoxFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MedicineBoxFilled';
}

export default RefIcon;