// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MediumSquareFilledSvg from '@ant-design/icons-svg/lib/asn/MediumSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MediumSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MediumSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MediumSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MediumSquareFilled';
}

export default RefIcon;