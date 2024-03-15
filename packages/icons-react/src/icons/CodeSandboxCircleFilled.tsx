// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CodeSandboxCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CodeSandboxCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeSandboxCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodeSandboxCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CodeSandboxCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CodeSandboxCircleFilled';
}

export default RefIcon;