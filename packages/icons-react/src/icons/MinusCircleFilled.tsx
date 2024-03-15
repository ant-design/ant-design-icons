// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MinusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/MinusCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MinusCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MinusCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MinusCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MinusCircleFilled';
}

export default RefIcon;