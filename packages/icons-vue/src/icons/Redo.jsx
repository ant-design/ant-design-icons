
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RedoOutlineSvg from '@ant-design/icons-svg/lib/outline/RedoOutline';

export default {
  name: 'IconRedo',
  displayName: 'Redo',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RedoOutlineSvg } },
      children
    ),
};
