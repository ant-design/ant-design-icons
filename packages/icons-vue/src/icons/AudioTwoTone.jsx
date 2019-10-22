
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AudioTwoToneSvg from '@ant-design/icons-svg/lib/twotone/AudioTwoTone';

export default {
  name: 'AudioTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AudioTwoToneSvg } },
      children
    ),
};
