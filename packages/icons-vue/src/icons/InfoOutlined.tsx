// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InfoOutlinedSvg from '@ant-design/icons-svg/lib/asn/InfoOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InfoOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InfoOutlinedSvg}></AntdIcon>;
};

InfoOutlined.displayName = 'InfoOutlined';
InfoOutlined.inheritAttrs = false;
export default InfoOutlined;