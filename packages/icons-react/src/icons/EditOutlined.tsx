// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EditOutlinedSvg from '@ant-design/icons-svg/lib/asn/EditOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EditOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EditOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(EditOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EditOutlined';
}

export default RefIcon;