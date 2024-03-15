// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import IssuesCloseOutlinedSvg from '@ant-design/icons-svg/lib/asn/IssuesCloseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IssuesCloseOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IssuesCloseOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(IssuesCloseOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'IssuesCloseOutlined';
}

export default RefIcon;