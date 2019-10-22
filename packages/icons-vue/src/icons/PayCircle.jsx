
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PayCircleOutlineSvg from '@ant-design/icons-svg/lib/outline/PayCircleOutline';

export default {
  name: 'PayCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PayCircleOutlineSvg } },
      children
    ),
};
