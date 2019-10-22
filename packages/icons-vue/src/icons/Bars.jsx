
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BarsOutlineSvg from '@ant-design/icons-svg/lib/outline/BarsOutline';

export default {
  name: 'Bars',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BarsOutlineSvg } },
      children
    ),
};
