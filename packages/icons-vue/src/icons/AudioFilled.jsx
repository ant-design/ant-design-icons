// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AudioFilledSvg from '@ant-design/icons-svg/lib/asn/AudioFilled';

export default {
  name: 'IconAudioFilled',
  displayName: 'AudioFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AudioFilledSvg } },
      children,
    ),
};