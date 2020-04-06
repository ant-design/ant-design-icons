// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DingtalkSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DingtalkSquareFilled';

export default {
  name: 'IconDingtalkSquareFilled',
  displayName: 'DingtalkSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DingtalkSquareFilledSvg } },
      children,
    ),
};