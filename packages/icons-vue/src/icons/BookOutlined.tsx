// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BookOutlinedSvg from '@ant-design/icons-svg/lib/asn/BookOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookOutlinedSvg}></AntdIcon>;
};

BookOutlined.displayName = 'BookOutlined';
BookOutlined.inheritAttrs = false;
export default BookOutlined;