
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TaobaoCircleFillSvg from '@ant-design/icons-svg/lib/fill/TaobaoCircleFill';

export default {
  name: 'IconTaobaoCircleFilled',
  displayName: 'TaobaoCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TaobaoCircleFillSvg } },
      children
    ),
};
