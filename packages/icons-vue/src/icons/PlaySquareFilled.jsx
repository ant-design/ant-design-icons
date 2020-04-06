// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PlaySquareFilledSvg from '@ant-design/icons-svg/lib/asn/PlaySquareFilled';

export default {
  name: 'IconPlaySquareFilled',
  displayName: 'PlaySquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PlaySquareFilledSvg } },
      children,
    ),
};