// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CodepenCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodepenCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodepenCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodepenCircleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CodepenCircleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CodepenCircleOutlined';
}

export default RefIcon;