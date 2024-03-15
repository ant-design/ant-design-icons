// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MinusSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/MinusSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MinusSquareOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MinusSquareOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MinusSquareOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MinusSquareOutlined';
}

export default RefIcon;