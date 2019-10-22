
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MediumOutlineSvg from '@ant-design/icons-svg/lib/outline/MediumOutline';

export default {
  name: 'Medium',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MediumOutlineSvg } },
      children
    ),
};
