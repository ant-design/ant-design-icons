
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InsuranceOutlineSvg from '@ant-design/icons-svg/lib/outline/InsuranceOutline';

export default {
  name: 'Insurance',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InsuranceOutlineSvg } },
      children
    ),
};
