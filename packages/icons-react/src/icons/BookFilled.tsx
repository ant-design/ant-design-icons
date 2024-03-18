// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BookFilledSvg from '@ant-design/icons-svg/lib/asn/BookFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BookFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BookFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BookFilled';
}

export default RefIcon;