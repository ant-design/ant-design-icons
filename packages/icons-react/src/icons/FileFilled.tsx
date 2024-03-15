// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileFilledSvg from '@ant-design/icons-svg/lib/asn/FileFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileFilled';
}

export default RefIcon;