
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileWordOutlineSvg from '@ant-design/icons-svg/lib/outline/FileWordOutline';

export default {
  name: 'FileWord',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileWordOutlineSvg } },
      children
    ),
};
