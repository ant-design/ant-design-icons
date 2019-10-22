
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HddOutlineSvg from '@ant-design/icons-svg/lib/outline/HddOutline';

export default {
  name: 'Hdd',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HddOutlineSvg } },
      children
    ),
};
