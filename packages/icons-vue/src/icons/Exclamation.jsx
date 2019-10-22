
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ExclamationOutlineSvg from '@ant-design/icons-svg/lib/outline/ExclamationOutline';

export default {
  name: 'Exclamation',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ExclamationOutlineSvg } },
      children
    ),
};
