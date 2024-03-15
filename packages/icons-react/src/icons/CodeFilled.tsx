// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CodeFilledSvg from '@ant-design/icons-svg/lib/asn/CodeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodeFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CodeFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CodeFilled';
}

export default RefIcon;