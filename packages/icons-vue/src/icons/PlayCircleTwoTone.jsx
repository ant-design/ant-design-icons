
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PlayCircleTwoToneSvg from '@ant-design/icons-svg/lib/twotone/PlayCircleTwoTone';

export default {
  name: 'IconPlayCircleTwoTone',
  displayName: 'PlayCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlayCircleTwoToneSvg } },
      children
    ),
};
