
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CloudDownloadOutlineSvg from '@ant-design/icons-svg/lib/outline/CloudDownloadOutline';

export default {
  name: 'IconCloudDownload',
  displayName: 'CloudDownload',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloudDownloadOutlineSvg } },
      children
    ),
};
