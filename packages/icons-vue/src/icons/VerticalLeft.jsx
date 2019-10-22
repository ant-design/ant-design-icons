
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import VerticalLeftOutlineSvg from '@ant-design/icons-svg/lib/outline/VerticalLeftOutline';

export default {
  name: 'VerticalLeft',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: VerticalLeftOutlineSvg } },
      children
    ),
};
