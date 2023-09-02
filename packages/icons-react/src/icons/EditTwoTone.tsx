// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EditTwoToneSvg from '@ant-design/icons-svg/lib/asn/EditTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EditTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EditTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  EditTwoTone.displayName = 'EditTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EditTwoTone);