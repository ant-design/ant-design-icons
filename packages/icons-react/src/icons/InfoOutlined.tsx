// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InfoOutlinedSvg from '@ant-design/icons-svg/lib/asn/InfoOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InfoOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InfoOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  InfoOutlined.displayName = 'InfoOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InfoOutlined);