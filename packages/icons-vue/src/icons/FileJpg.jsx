
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileJpgOutlineSvg from '@ant-design/icons-svg/lib/outline/FileJpgOutline';

export default {
  name: 'FileJpg',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileJpgOutlineSvg } },
      children
    ),
};
