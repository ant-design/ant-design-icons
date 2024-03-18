// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CodepenSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CodepenSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodepenSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CodepenSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CodepenSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CodepenSquareFilled';
}

export default RefIcon;