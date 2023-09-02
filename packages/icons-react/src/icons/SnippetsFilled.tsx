// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SnippetsFilledSvg from '@ant-design/icons-svg/lib/asn/SnippetsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SnippetsFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SnippetsFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SnippetsFilled.displayName = 'SnippetsFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SnippetsFilled);