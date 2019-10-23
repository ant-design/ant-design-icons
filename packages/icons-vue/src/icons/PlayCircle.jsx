
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PlayCircleOutlineSvg from '@ant-design/icons-svg/lib/outline/PlayCircleOutline';

export default {
  name: 'IconPlayCircle',
  displayName: 'PlayCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlayCircleOutlineSvg } },
      children
    ),
};
