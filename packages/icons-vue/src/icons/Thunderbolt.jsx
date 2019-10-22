
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ThunderboltOutlineSvg from '@ant-design/icons-svg/lib/outline/ThunderboltOutline';

export default {
  name: 'Thunderbolt',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ThunderboltOutlineSvg } },
      children
    ),
};
