// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PoundCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PoundCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PoundCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PoundCircleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PoundCircleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PoundCircleOutlined';
}

export default RefIcon;