
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TaobaoCircleOutlineSvg from '@ant-design/icons-svg/lib/outline/TaobaoCircleOutline';

export default {
  name: 'IconTaobaoCircle',
  displayName: 'TaobaoCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TaobaoCircleOutlineSvg } },
      children
    ),
};
