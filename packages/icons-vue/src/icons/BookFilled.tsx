// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookFilledSvg from '@ant-design/icons-svg/lib/asn/BookFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookFilled: BookFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookFilledSvg}></AntdIcon>;
};

BookFilled.displayName = 'BookFilled';
BookFilled.inheritAttrs = false;
export default BookFilled;