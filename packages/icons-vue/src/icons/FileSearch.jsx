
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileSearchOutlineSvg from '@ant-design/icons-svg/lib/outline/FileSearchOutline';

export default {
  name: 'FileSearch',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileSearchOutlineSvg } },
      children
    ),
};
