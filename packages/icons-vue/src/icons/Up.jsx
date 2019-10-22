
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UpOutlineSvg from '@ant-design/icons-svg/lib/outline/UpOutline';

export default {
  name: 'Up',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UpOutlineSvg } },
      children
    ),
};
