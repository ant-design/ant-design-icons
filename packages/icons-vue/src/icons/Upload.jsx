
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UploadOutlineSvg from '@ant-design/icons-svg/lib/outline/UploadOutline';

export default {
  name: 'IconUpload',
  displayName: 'Upload',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UploadOutlineSvg } },
      children
    ),
};
