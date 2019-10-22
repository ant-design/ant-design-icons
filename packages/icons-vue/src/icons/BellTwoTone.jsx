
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BellTwoToneSvg from '@ant-design/icons-svg/lib/twotone/BellTwoTone';

export default {
  name: 'BellTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BellTwoToneSvg } },
      children
    ),
};
