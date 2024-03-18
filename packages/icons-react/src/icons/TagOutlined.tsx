// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TagOutlinedSvg from '@ant-design/icons-svg/lib/asn/TagOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TagOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TagOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TagOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TagOutlined';
}

export default RefIcon;