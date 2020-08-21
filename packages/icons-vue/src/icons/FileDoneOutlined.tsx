// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileDoneOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileDoneOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileDoneOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileDoneOutlinedSvg}></AntdIcon>;
};

FileDoneOutlined.displayName = 'FileDoneOutlined';
FileDoneOutlined.inheritAttrs = false;
export default FileDoneOutlined;