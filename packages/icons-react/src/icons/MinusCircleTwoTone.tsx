// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MinusCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/MinusCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MinusCircleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MinusCircleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MinusCircleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MinusCircleTwoTone';
}

export default RefIcon;