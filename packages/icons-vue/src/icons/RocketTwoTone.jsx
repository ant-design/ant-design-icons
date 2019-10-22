
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RocketTwoToneSvg from '@ant-design/icons-svg/lib/twotone/RocketTwoTone';

export default {
  name: 'RocketTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RocketTwoToneSvg } },
      children
    ),
};
