
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EyeInvisibleOutlineSvg from '@ant-design/icons-svg/lib/outline/EyeInvisibleOutline';

export default {
  name: 'IconEyeInvisible',
  displayName: 'EyeInvisible',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EyeInvisibleOutlineSvg } },
      children
    ),
};
