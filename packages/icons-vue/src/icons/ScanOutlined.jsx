// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ScanOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScanOutlined';

export default {
  name: 'IconScanOutlined',
  displayName: 'ScanOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ScanOutlinedSvg } },
      children,
    ),
};