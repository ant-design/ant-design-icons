// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DeleteRowOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeleteRowOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeleteRowOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DeleteRowOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DeleteRowOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DeleteRowOutlined';
}

export default RefIcon;