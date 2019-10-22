
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MedicineBoxOutlineSvg from '@ant-design/icons-svg/lib/outline/MedicineBoxOutline';

export default {
  name: 'MedicineBox',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MedicineBoxOutlineSvg } },
      children
    ),
};
