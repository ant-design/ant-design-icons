// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SearchOutlinedSvg from '@ant-design/icons-svg/lib/asn/SearchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SearchOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SearchOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SearchOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SearchOutlined';
}

export default RefIcon;