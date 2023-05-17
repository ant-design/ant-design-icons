// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TagsTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TagsTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TagsTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  TagsTwoTone.displayName = 'TagsTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TagsTwoTone);