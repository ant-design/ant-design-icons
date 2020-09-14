// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PictureTwoToneSvg from '@ant-design/icons-svg/lib/asn/PictureTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PictureTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PictureTwoToneSvg}></AntdIcon>;
};

PictureTwoTone.displayName = 'PictureTwoTone';
PictureTwoTone.inheritAttrs = false;
export default PictureTwoTone;