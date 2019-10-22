
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SafetyOutlineSvg from '@ant-design/icons-svg/lib/outline/SafetyOutline';

export default {
  name: 'Safety',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SafetyOutlineSvg } },
      children
    ),
};
