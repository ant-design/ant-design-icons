// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MinusOutlinedSvg from '@ant-design/icons-svg/lib/asn/MinusOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MinusOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MinusOutlinedSvg} />;

 /**![minus](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg3MiA0NzRIMTUyYy00LjQgMC04IDMuNi04IDh2NjBjMCA0LjQgMy42IDggOCA4aDcyMGM0LjQgMCA4LTMuNiA4LTh2LTYwYzAtNC40LTMuNi04LTgtOHoiIC8+PC9zdmc+) */ 
const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MinusOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MinusOutlined';
}

export default RefIcon;