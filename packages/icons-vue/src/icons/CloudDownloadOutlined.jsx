// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CloudDownloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudDownloadOutlined';

export default {
  name: 'IconCloudDownloadOutlined',
  displayName: 'CloudDownloadOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CloudDownloadOutlinedSvg } },
      children,
    ),
};