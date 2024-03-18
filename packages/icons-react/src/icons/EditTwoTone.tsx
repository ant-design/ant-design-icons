// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EditTwoToneSvg from '@ant-design/icons-svg/lib/asn/EditTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EditTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EditTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(EditTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EditTwoTone';
}

export default RefIcon;