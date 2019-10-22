
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LeftCircleOutlineSvg from '@ant-design/icons-svg/lib/outline/LeftCircleOutline';

export default {
  name: 'LeftCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LeftCircleOutlineSvg } },
      children
    ),
};
