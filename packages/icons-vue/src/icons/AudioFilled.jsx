
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AudioFillSvg from '@ant-design/icons-svg/lib/fill/AudioFill';

export default {
  name: 'IconAudioFilled',
  displayName: 'AudioFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AudioFillSvg } },
      children
    ),
};
