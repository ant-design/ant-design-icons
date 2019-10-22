
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BehanceOutlineSvg from '@ant-design/icons-svg/lib/outline/BehanceOutline';

export default {
  name: 'Behance',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BehanceOutlineSvg } },
      children
    ),
};
