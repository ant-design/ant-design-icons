// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EditFilledSvg from '@ant-design/icons-svg/lib/asn/EditFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EditFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EditFilledSvg}></AntdIcon>;
};

EditFilled.displayName = 'EditFilled';
EditFilled.inheritAttrs = false;
export default EditFilled;