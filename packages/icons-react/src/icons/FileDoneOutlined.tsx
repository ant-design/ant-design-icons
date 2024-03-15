// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileDoneOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileDoneOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileDoneOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileDoneOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileDoneOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileDoneOutlined';
}

export default RefIcon;