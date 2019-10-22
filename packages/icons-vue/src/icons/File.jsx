
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileOutlineSvg from '@ant-design/icons-svg/lib/outline/FileOutline';

export default {
  name: 'File',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileOutlineSvg } },
      children
    ),
};
