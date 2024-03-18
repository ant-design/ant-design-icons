// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SnippetsFilledSvg from '@ant-design/icons-svg/lib/asn/SnippetsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SnippetsFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SnippetsFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SnippetsFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SnippetsFilled';
}

export default RefIcon;