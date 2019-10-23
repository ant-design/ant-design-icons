
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileProtectOutlineSvg from '@ant-design/icons-svg/lib/outline/FileProtectOutline';

export default {
  name: 'IconFileProtect',
  displayName: 'FileProtect',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileProtectOutlineSvg } },
      children
    ),
};
