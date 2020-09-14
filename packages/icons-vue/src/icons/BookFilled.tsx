// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BookFilledSvg from '@ant-design/icons-svg/lib/asn/BookFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookFilledSvg}></AntdIcon>;
};

BookFilled.displayName = 'BookFilled';
BookFilled.inheritAttrs = false;
export default BookFilled;