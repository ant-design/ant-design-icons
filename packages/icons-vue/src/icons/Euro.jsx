
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EuroOutlineSvg from '@ant-design/icons-svg/lib/outline/EuroOutline';

export default {
  name: 'IconEuro',
  displayName: 'Euro',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EuroOutlineSvg } },
      children
    ),
};
