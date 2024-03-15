// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MinusSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/MinusSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MinusSquareTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MinusSquareTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MinusSquareTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MinusSquareTwoTone';
}

export default RefIcon;