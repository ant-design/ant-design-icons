// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileTwoToneSvg}></AntdIcon>;
};

FileTwoTone.displayName = 'FileTwoTone';
FileTwoTone.inheritAttrs = false;
export default FileTwoTone;