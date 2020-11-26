// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookOutlinedSvg from '@ant-design/icons-svg/lib/asn/BookOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookOutlined: BookOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookOutlinedSvg}></AntdIcon>;
};

BookOutlined.displayName = 'BookOutlined';
BookOutlined.inheritAttrs = false;
export default BookOutlined;