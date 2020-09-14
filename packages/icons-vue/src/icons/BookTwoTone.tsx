// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BookTwoToneSvg from '@ant-design/icons-svg/lib/asn/BookTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookTwoToneSvg}></AntdIcon>;
};

BookTwoTone.displayName = 'BookTwoTone';
BookTwoTone.inheritAttrs = false;
export default BookTwoTone;