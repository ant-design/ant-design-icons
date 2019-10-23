
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PoundOutlineSvg from '@ant-design/icons-svg/lib/outline/PoundOutline';

export default {
  name: 'IconPound',
  displayName: 'Pound',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PoundOutlineSvg } },
      children
    ),
};
