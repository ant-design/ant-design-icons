// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MailFilledSvg from '@ant-design/icons-svg/lib/asn/MailFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MailFilledSvg} />;

 /**![mail](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkyOCAxNjBIOTZjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjY0MGMwIDE3LjcgMTQuMyAzMiAzMiAzMmg4MzJjMTcuNyAwIDMyLTE0LjMgMzItMzJWMTkyYzAtMTcuNy0xNC4zLTMyLTMyLTMyem0tODAuOCAxMDguOUw1MzEuNyA1MTQuNGMtNy44IDYuMS0xOC43IDYuMS0yNi41IDBMMTg5LjYgMjY4LjlBNy4yIDcuMiAwIDAxMTk0IDI1Nmg2NDguOGE3LjIgNy4yIDAgMDE0LjQgMTIuOXoiIC8+PC9zdmc+) */ 
const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MailFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MailFilled';
}

export default RefIcon;