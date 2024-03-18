// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TagFilledSvg from '@ant-design/icons-svg/lib/asn/TagFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TagFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TagFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TagFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TagFilled';
}

export default RefIcon;