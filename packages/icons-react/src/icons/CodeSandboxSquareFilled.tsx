// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CodeSandboxSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CodeSandboxSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeSandboxSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodeSandboxSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CodeSandboxSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CodeSandboxSquareFilled';
}

export default RefIcon;