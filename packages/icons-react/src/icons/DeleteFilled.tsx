// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DeleteFilledSvg from '@ant-design/icons-svg/lib/asn/DeleteFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeleteFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DeleteFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DeleteFilled.displayName = 'DeleteFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DeleteFilled);