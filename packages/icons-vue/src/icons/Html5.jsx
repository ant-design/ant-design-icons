
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import Html5OutlineSvg from '@ant-design/icons-svg/lib/outline/Html5Outline';

export default {
  name: 'Html5',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: Html5OutlineSvg } },
      children
    ),
};
