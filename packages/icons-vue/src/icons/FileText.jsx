
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileTextOutlineSvg from '@ant-design/icons-svg/lib/outline/FileTextOutline';

export default {
  name: 'FileText',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileTextOutlineSvg } },
      children
    ),
};
