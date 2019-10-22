
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PushpinOutlineSvg from '@ant-design/icons-svg/lib/outline/PushpinOutline';

export default {
  name: 'Pushpin',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PushpinOutlineSvg } },
      children
    ),
};
