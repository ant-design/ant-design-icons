// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DeleteOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeleteOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeleteOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DeleteOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DeleteOutlined.displayName = 'DeleteOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DeleteOutlined);