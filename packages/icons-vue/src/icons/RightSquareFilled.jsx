// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RightSquareFilledSvg from '@ant-design/icons-svg/lib/asn/RightSquareFilled';

export default {
  name: 'IconRightSquareFilled',
  displayName: 'RightSquareFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RightSquareFilledSvg } },
      children,
    ),
};