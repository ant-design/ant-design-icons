
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ExclamationCircleOutlineSvg from '@ant-design/icons-svg/lib/outline/ExclamationCircleOutline';

export default {
  name: 'ExclamationCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ExclamationCircleOutlineSvg } },
      children
    ),
};
