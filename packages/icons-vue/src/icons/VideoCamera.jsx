
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import VideoCameraOutlineSvg from '@ant-design/icons-svg/lib/outline/VideoCameraOutline';

export default {
  name: 'VideoCamera',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: VideoCameraOutlineSvg } },
      children
    ),
};
