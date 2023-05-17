// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TagFilledSvg from '@ant-design/icons-svg/lib/asn/TagFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TagFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TagFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  TagFilled.displayName = 'TagFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TagFilled);