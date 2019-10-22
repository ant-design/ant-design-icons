
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DisconnectOutlineSvg from '@ant-design/icons-svg/lib/outline/DisconnectOutline';

export default {
  name: 'Disconnect',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DisconnectOutlineSvg } },
      children
    ),
};
