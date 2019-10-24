
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CheckCircleOutlineSvg from '@ant-design/icons-svg/lib/outline/CheckCircleOutline';

export default {
  name: 'IconCheckCircle',
  displayName: 'CheckCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CheckCircleOutlineSvg } },
      children
    ),
};
