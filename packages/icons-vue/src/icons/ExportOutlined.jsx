// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ExportOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExportOutlined';

export default {
  name: 'IconExportOutlined',
  displayName: 'ExportOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ExportOutlinedSvg } },
      children,
    ),
};