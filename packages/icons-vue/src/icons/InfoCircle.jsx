
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InfoCircleOutlineSvg from '@ant-design/icons-svg/lib/outline/InfoCircleOutline';

export default {
  name: 'IconInfoCircle',
  displayName: 'InfoCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InfoCircleOutlineSvg } },
      children
    ),
};
