// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EditFilledSvg from '@ant-design/icons-svg/lib/asn/EditFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EditFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EditFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(EditFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EditFilled';
}

export default RefIcon;