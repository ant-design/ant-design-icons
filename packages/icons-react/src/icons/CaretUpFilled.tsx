// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CaretUpFilledSvg from '@ant-design/icons-svg/lib/asn/CaretUpFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretUpFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CaretUpFilledSvg} />;

 /**![caret-up](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg1OC45IDY4OUw1MzAuNSAzMDguMmMtOS40LTEwLjktMjcuNS0xMC45LTM3IDBMMTY1LjEgNjg5Yy0xMi4yIDE0LjItMS4yIDM1IDE4LjUgMzVoNjU2LjhjMTkuNyAwIDMwLjctMjAuOCAxOC41LTM1eiIgLz48L3N2Zz4=) */ 
const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CaretUpFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CaretUpFilled';
}

export default RefIcon;