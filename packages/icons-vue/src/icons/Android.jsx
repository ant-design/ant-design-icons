
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AndroidOutlineSvg from '@ant-design/icons-svg/lib/outline/AndroidOutline';

export default {
  name: 'Android',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AndroidOutlineSvg } },
      children
    ),
};
