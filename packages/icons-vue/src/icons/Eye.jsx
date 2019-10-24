
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EyeOutlineSvg from '@ant-design/icons-svg/lib/outline/EyeOutline';

export default {
  name: 'IconEye',
  displayName: 'Eye',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EyeOutlineSvg } },
      children
    ),
};
