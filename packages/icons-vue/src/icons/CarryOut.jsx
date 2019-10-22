
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CarryOutOutlineSvg from '@ant-design/icons-svg/lib/outline/CarryOutOutline';

export default {
  name: 'CarryOut',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CarryOutOutlineSvg } },
      children
    ),
};
