// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DeleteRowOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeleteRowOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeleteRowOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DeleteRowOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DeleteRowOutlined.displayName = 'DeleteRowOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DeleteRowOutlined);