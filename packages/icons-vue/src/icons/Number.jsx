
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import NumberOutlineSvg from '@ant-design/icons-svg/lib/outline/NumberOutline';

export default {
  name: 'IconNumber',
  displayName: 'Number',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: NumberOutlineSvg } },
      children
    ),
};
