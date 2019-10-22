
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SwitcherTwoToneSvg from '@ant-design/icons-svg/lib/twotone/SwitcherTwoTone';

export default {
  name: 'SwitcherTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SwitcherTwoToneSvg } },
      children
    ),
};
