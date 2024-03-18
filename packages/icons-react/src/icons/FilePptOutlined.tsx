// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FilePptOutlinedSvg from '@ant-design/icons-svg/lib/asn/FilePptOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilePptOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FilePptOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FilePptOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FilePptOutlined';
}

export default RefIcon;