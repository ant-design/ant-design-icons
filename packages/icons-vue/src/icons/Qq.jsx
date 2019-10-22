
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import QqOutlineSvg from '@ant-design/icons-svg/lib/outline/QqOutline';

export default {
  name: 'Qq',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: QqOutlineSvg } },
      children
    ),
};
