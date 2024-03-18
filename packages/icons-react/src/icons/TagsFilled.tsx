// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TagsFilledSvg from '@ant-design/icons-svg/lib/asn/TagsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TagsFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TagsFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TagsFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TagsFilled';
}

export default RefIcon;