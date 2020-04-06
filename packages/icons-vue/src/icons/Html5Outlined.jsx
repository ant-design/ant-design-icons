// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import Html5OutlinedSvg from '@ant-design/icons-svg/lib/asn/Html5Outlined';

export default {
  name: 'IconHtml5Outlined',
  displayName: 'Html5Outlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: Html5OutlinedSvg } },
      children,
    ),
};