
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileZipOutlineSvg from '@ant-design/icons-svg/lib/outline/FileZipOutline';

export default {
  name: 'FileZip',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileZipOutlineSvg } },
      children
    ),
};
