
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DollarTwoToneSvg from '@ant-design/icons-svg/lib/twotone/DollarTwoTone';

export default {
  name: 'IconDollarTwoTone',
  displayName: 'DollarTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DollarTwoToneSvg } },
      children
    ),
};
