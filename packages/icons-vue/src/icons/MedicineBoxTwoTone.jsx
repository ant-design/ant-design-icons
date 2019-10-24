
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MedicineBoxTwoToneSvg from '@ant-design/icons-svg/lib/twotone/MedicineBoxTwoTone';

export default {
  name: 'IconMedicineBoxTwoTone',
  displayName: 'MedicineBoxTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MedicineBoxTwoToneSvg } },
      children
    ),
};
