
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CarOutlineSvg from '@ant-design/icons-svg/lib/outline/CarOutline';

export default {
  name: 'Car',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CarOutlineSvg } },
      children
    ),
};
