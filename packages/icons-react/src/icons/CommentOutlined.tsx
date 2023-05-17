// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CommentOutlinedSvg from '@ant-design/icons-svg/lib/asn/CommentOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CommentOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CommentOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CommentOutlined.displayName = 'CommentOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CommentOutlined);