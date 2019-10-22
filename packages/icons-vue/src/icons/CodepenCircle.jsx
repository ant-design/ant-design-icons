
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CodepenCircleOutlineSvg from '@ant-design/icons-svg/lib/outline/CodepenCircleOutline';

export default {
  name: 'CodepenCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CodepenCircleOutlineSvg } },
      children
    ),
};
