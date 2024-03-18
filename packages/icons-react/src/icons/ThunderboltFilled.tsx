// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ThunderboltFilledSvg from '@ant-design/icons-svg/lib/asn/ThunderboltFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ThunderboltFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ThunderboltFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ThunderboltFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ThunderboltFilled';
}

export default RefIcon;