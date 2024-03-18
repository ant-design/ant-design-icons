// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ConsoleSqlOutlinedSvg from '@ant-design/icons-svg/lib/asn/ConsoleSqlOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ConsoleSqlOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ConsoleSqlOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ConsoleSqlOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ConsoleSqlOutlined';
}

export default RefIcon;