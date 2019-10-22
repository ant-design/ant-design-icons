
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ExceptionOutlineSvg from '@ant-design/icons-svg/lib/outline/ExceptionOutline';

export default {
  name: 'Exception',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ExceptionOutlineSvg } },
      children
    ),
};
