
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RocketOutlineSvg from '@ant-design/icons-svg/lib/outline/RocketOutline';

export default {
  name: 'Rocket',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RocketOutlineSvg } },
      children
    ),
};
