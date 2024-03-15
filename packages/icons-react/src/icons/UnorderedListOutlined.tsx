// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UnorderedListOutlinedSvg from '@ant-design/icons-svg/lib/asn/UnorderedListOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UnorderedListOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UnorderedListOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(UnorderedListOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UnorderedListOutlined';
}

export default RefIcon;