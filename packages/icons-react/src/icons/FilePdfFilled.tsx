// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FilePdfFilledSvg from '@ant-design/icons-svg/lib/asn/FilePdfFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilePdfFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FilePdfFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FilePdfFilled.displayName = 'FilePdfFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FilePdfFilled);