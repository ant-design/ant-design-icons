
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileImageOutlineSvg from '@ant-design/icons-svg/lib/outline/FileImageOutline';

export default {
  name: 'FileImage',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileImageOutlineSvg } },
      children
    ),
};
