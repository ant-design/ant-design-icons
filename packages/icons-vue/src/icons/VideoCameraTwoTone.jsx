
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import VideoCameraTwoToneSvg from '@ant-design/icons-svg/lib/twotone/VideoCameraTwoTone';

export default {
  name: 'IconVideoCameraTwoTone',
  displayName: 'VideoCameraTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: VideoCameraTwoToneSvg } },
      children
    ),
};
