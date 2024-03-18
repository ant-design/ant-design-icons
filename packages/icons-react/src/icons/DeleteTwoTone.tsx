// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DeleteTwoToneSvg from '@ant-design/icons-svg/lib/asn/DeleteTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeleteTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DeleteTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DeleteTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DeleteTwoTone';
}

export default RefIcon;