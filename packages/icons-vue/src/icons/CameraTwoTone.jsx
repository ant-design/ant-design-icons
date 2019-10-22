
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CameraTwoToneSvg from '@ant-design/icons-svg/lib/twotone/CameraTwoTone';

export default {
  name: 'CameraTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CameraTwoToneSvg } },
      children
    ),
};
