// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FilePdfOutlinedSvg from '@ant-design/icons-svg/lib/asn/FilePdfOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilePdfOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FilePdfOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FilePdfOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FilePdfOutlined';
}

export default RefIcon;