
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DownloadOutlineSvg from '@ant-design/icons-svg/lib/outline/DownloadOutline';

export default {
  name: 'IconDownload',
  displayName: 'Download',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DownloadOutlineSvg } },
      children
    ),
};
