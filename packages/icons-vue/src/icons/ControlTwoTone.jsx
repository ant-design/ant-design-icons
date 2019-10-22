
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ControlTwoToneSvg from '@ant-design/icons-svg/lib/twotone/ControlTwoTone';

export default {
  name: 'ControlTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ControlTwoToneSvg } },
      children
    ),
};
