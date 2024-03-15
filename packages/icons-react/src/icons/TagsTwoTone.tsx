// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TagsTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TagsTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TagsTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TagsTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TagsTwoTone';
}

export default RefIcon;