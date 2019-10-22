
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HeartOutlineSvg from '@ant-design/icons-svg/lib/outline/HeartOutline';

export default {
  name: 'Heart',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HeartOutlineSvg } },
      children
    ),
};
