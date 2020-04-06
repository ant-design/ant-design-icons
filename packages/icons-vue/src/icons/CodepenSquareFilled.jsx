// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CodepenSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CodepenSquareFilled';

export default {
  name: 'IconCodepenSquareFilled',
  displayName: 'CodepenSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CodepenSquareFilledSvg } },
      children,
    ),
};