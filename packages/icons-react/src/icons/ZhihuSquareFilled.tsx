// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ZhihuSquareFilledSvg from '@ant-design/icons-svg/lib/asn/ZhihuSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZhihuSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ZhihuSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ZhihuSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ZhihuSquareFilled';
}

export default RefIcon;