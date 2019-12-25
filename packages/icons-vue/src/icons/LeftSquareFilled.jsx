// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LeftSquareFilledSvg from '@ant-design/icons-svg/lib/asn/LeftSquareFilled';

export default {
  name: 'IconLeftSquareFilled',
  displayName: 'LeftSquareFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LeftSquareFilledSvg } },
      children,
    ),
};