// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TaobaoSquareFilledSvg from '@ant-design/icons-svg/lib/asn/TaobaoSquareFilled';

export default {
  name: 'IconTaobaoSquareFilled',
  displayName: 'TaobaoSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TaobaoSquareFilledSvg } },
      children,
    ),
};