
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EnterOutlineSvg from '@ant-design/icons-svg/lib/outline/EnterOutline';

export default {
  name: 'Enter',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EnterOutlineSvg } },
      children
    ),
};
