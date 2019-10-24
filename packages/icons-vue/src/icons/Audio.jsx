
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AudioOutlineSvg from '@ant-design/icons-svg/lib/outline/AudioOutline';

export default {
  name: 'IconAudio',
  displayName: 'Audio',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AudioOutlineSvg } },
      children
    ),
};
