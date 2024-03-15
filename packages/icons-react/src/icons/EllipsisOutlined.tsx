// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EllipsisOutlinedSvg from '@ant-design/icons-svg/lib/asn/EllipsisOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EllipsisOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EllipsisOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(EllipsisOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EllipsisOutlined';
}

export default RefIcon;