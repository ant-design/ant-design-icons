// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TagsFilledSvg from '@ant-design/icons-svg/lib/asn/TagsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TagsFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TagsFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  TagsFilled.displayName = 'TagsFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TagsFilled);