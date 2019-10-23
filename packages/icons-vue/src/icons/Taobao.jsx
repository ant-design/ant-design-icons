
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TaobaoOutlineSvg from '@ant-design/icons-svg/lib/outline/TaobaoOutline';

export default {
  name: 'IconTaobao',
  displayName: 'Taobao',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TaobaoOutlineSvg } },
      children
    ),
};
