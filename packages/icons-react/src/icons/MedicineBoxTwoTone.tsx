// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MedicineBoxTwoToneSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MedicineBoxTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MedicineBoxTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MedicineBoxTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MedicineBoxTwoTone';
}

export default RefIcon;