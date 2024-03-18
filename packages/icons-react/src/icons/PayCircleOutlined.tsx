// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PayCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PayCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PayCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PayCircleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PayCircleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PayCircleOutlined';
}

export default RefIcon;