
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import VerticalAlignBottomOutlineSvg from '@ant-design/icons-svg/lib/outline/VerticalAlignBottomOutline';

export default {
  name: 'VerticalAlignBottom',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: VerticalAlignBottomOutlineSvg } },
      children
    ),
};
