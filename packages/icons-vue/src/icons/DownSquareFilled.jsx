// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DownSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DownSquareFilled';

export default {
  name: 'IconDownSquareFilled',
  displayName: 'DownSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DownSquareFilledSvg } },
      children,
    ),
};