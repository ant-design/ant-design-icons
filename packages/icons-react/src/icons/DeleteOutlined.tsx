// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DeleteOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeleteOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeleteOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DeleteOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DeleteOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DeleteOutlined';
}

export default RefIcon;