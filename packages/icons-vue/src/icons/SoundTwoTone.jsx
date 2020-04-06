// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SoundTwoToneSvg from '@ant-design/icons-svg/lib/asn/SoundTwoTone';

export default {
  name: 'IconSoundTwoTone',
  displayName: 'SoundTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SoundTwoToneSvg } },
      children,
    ),
};