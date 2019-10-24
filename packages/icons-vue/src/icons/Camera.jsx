
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CameraOutlineSvg from '@ant-design/icons-svg/lib/outline/CameraOutline';

export default {
  name: 'IconCamera',
  displayName: 'Camera',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CameraOutlineSvg } },
      children
    ),
};
