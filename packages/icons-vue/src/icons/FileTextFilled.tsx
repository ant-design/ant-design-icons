// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileTextFilledSvg from '@ant-design/icons-svg/lib/asn/FileTextFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileTextFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileTextFilledSvg}></AntdIcon>;
};

FileTextFilled.displayName = 'FileTextFilled';
FileTextFilled.inheritAttrs = false;
export default FileTextFilled;