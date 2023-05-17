// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TagsOutlinedSvg from '@ant-design/icons-svg/lib/asn/TagsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TagsOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TagsOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  TagsOutlined.displayName = 'TagsOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TagsOutlined);