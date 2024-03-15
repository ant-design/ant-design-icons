// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SaveOutlinedSvg from '@ant-design/icons-svg/lib/asn/SaveOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SaveOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SaveOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SaveOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SaveOutlined';
}

export default RefIcon;