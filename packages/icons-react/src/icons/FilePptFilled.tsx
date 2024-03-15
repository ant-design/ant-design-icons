// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FilePptFilledSvg from '@ant-design/icons-svg/lib/asn/FilePptFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilePptFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FilePptFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FilePptFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FilePptFilled';
}

export default RefIcon;