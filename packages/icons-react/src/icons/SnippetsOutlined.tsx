// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SnippetsOutlinedSvg from '@ant-design/icons-svg/lib/asn/SnippetsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SnippetsOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SnippetsOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SnippetsOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SnippetsOutlined';
}

export default RefIcon;