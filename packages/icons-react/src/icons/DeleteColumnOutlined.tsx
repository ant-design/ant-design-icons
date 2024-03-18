// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DeleteColumnOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeleteColumnOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeleteColumnOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DeleteColumnOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DeleteColumnOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DeleteColumnOutlined';
}

export default RefIcon;