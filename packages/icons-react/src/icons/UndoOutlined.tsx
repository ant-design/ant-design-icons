// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UndoOutlinedSvg from '@ant-design/icons-svg/lib/asn/UndoOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UndoOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UndoOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(UndoOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UndoOutlined';
}

export default RefIcon;