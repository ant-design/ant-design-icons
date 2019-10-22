
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ZoomInOutlineSvg from '@ant-design/icons-svg/lib/outline/ZoomInOutline';

export default {
  name: 'ZoomIn',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ZoomInOutlineSvg } },
      children
    ),
};
