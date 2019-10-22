
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CameraFillSvg from '@ant-design/icons-svg/lib/fill/CameraFill';

export default {
  name: 'CameraFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CameraFillSvg } },
      children
    ),
};
