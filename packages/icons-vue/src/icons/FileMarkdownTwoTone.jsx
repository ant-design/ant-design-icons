
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileMarkdownTwoToneSvg from '@ant-design/icons-svg/lib/twotone/FileMarkdownTwoTone';

export default {
  name: 'FileMarkdownTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileMarkdownTwoToneSvg } },
      children
    ),
};
