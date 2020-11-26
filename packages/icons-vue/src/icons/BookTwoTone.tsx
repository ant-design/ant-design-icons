// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookTwoToneSvg from '@ant-design/icons-svg/lib/asn/BookTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookTwoTone: BookTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookTwoToneSvg}></AntdIcon>;
};

BookTwoTone.displayName = 'BookTwoTone';
BookTwoTone.inheritAttrs = false;
export default BookTwoTone;