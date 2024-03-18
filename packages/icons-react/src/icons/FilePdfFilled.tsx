// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FilePdfFilledSvg from '@ant-design/icons-svg/lib/asn/FilePdfFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilePdfFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FilePdfFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FilePdfFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FilePdfFilled';
}

export default RefIcon;