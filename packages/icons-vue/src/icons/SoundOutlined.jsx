// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SoundOutlinedSvg from '@ant-design/icons-svg/lib/asn/SoundOutlined';

export default {
  name: 'IconSoundOutlined',
  displayName: 'SoundOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SoundOutlinedSvg } },
      children,
    ),
};