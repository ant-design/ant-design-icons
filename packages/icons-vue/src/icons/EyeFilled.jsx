// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EyeFilledSvg from '@ant-design/icons-svg/lib/asn/EyeFilled';

export default {
  name: 'IconEyeFilled',
  displayName: 'EyeFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EyeFilledSvg } },
      children,
    ),
};