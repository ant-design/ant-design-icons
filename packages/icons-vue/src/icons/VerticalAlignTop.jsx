
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import VerticalAlignTopOutlineSvg from '@ant-design/icons-svg/lib/outline/VerticalAlignTopOutline';

export default {
  name: 'VerticalAlignTop',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: VerticalAlignTopOutlineSvg } },
      children
    ),
};
