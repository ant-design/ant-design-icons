// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DeleteColumnOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeleteColumnOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeleteColumnOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DeleteColumnOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DeleteColumnOutlined.displayName = 'DeleteColumnOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DeleteColumnOutlined);