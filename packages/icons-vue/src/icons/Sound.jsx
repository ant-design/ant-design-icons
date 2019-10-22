
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SoundOutlineSvg from '@ant-design/icons-svg/lib/outline/SoundOutline';

export default {
  name: 'Sound',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SoundOutlineSvg } },
      children
    ),
};
