// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileImageFilledSvg from '@ant-design/icons-svg/lib/asn/FileImageFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileImageFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileImageFilledSvg}></AntdIcon>;
};

FileImageFilled.displayName = 'FileImageFilled';
FileImageFilled.inheritAttrs = false;
export default FileImageFilled;