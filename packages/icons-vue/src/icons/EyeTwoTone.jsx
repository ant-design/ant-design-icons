
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EyeTwoToneSvg from '@ant-design/icons-svg/lib/twotone/EyeTwoTone';

export default {
  name: 'EyeTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EyeTwoToneSvg } },
      children
    ),
};
