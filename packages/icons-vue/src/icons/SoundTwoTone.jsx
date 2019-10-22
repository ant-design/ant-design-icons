
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SoundTwoToneSvg from '@ant-design/icons-svg/lib/twotone/SoundTwoTone';

export default {
  name: 'SoundTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SoundTwoToneSvg } },
      children
    ),
};
