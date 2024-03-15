// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloseCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloseCircleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CloseCircleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CloseCircleOutlined';
}

export default RefIcon;