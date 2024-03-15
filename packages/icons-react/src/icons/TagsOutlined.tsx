// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TagsOutlinedSvg from '@ant-design/icons-svg/lib/asn/TagsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TagsOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TagsOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TagsOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TagsOutlined';
}

export default RefIcon;