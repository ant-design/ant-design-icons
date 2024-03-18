// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TableOutlinedSvg from '@ant-design/icons-svg/lib/asn/TableOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TableOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TableOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TableOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TableOutlined';
}

export default RefIcon;