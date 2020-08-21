// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EditOutlinedSvg from '@ant-design/icons-svg/lib/asn/EditOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EditOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EditOutlinedSvg}></AntdIcon>;
};

EditOutlined.displayName = 'EditOutlined';
EditOutlined.inheritAttrs = false;
export default EditOutlined;