// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EuroCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/EuroCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EuroCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EuroCircleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(EuroCircleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EuroCircleOutlined';
}

export default RefIcon;