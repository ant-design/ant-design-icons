
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CloudUploadOutlineSvg from '@ant-design/icons-svg/lib/outline/CloudUploadOutline';

export default {
  name: 'CloudUpload',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloudUploadOutlineSvg } },
      children
    ),
};
