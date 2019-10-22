
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ShakeOutlineSvg from '@ant-design/icons-svg/lib/outline/ShakeOutline';

export default {
  name: 'Shake',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ShakeOutlineSvg } },
      children
    ),
};
