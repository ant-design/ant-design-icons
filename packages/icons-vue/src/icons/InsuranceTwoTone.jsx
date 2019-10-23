
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InsuranceTwoToneSvg from '@ant-design/icons-svg/lib/twotone/InsuranceTwoTone';

export default {
  name: 'IconInsuranceTwoTone',
  displayName: 'InsuranceTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InsuranceTwoToneSvg } },
      children
    ),
};
