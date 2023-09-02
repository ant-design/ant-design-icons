// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TagTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TagTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TagTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  TagTwoTone.displayName = 'TagTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TagTwoTone);