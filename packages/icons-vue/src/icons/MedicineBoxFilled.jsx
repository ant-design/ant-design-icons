
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MedicineBoxFillSvg from '@ant-design/icons-svg/lib/fill/MedicineBoxFill';

export default {
  name: 'MedicineBoxFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MedicineBoxFillSvg } },
      children
    ),
};
