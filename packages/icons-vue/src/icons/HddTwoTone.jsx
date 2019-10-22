
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HddTwoToneSvg from '@ant-design/icons-svg/lib/twotone/HddTwoTone';

export default {
  name: 'HddTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HddTwoToneSvg } },
      children
    ),
};
