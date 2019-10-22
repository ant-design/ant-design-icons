
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DragOutlineSvg from '@ant-design/icons-svg/lib/outline/DragOutline';

export default {
  name: 'Drag',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DragOutlineSvg } },
      children
    ),
};
