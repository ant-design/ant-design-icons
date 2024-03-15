// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BookOutlinedSvg from '@ant-design/icons-svg/lib/asn/BookOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BookOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BookOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BookOutlined';
}

export default RefIcon;