
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FlagTwoToneSvg from '@ant-design/icons-svg/lib/twotone/FlagTwoTone';

export default {
  name: 'FlagTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FlagTwoToneSvg } },
      children
    ),
};
