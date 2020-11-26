// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilePptFilledSvg from '@ant-design/icons-svg/lib/asn/FilePptFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilePptFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilePptFilled: FilePptFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilePptFilledSvg}></AntdIcon>;
};

FilePptFilled.displayName = 'FilePptFilled';
FilePptFilled.inheritAttrs = false;
export default FilePptFilled;