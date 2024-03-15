// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TaobaoOutlinedSvg from '@ant-design/icons-svg/lib/asn/TaobaoOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaobaoOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TaobaoOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TaobaoOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TaobaoOutlined';
}

export default RefIcon;