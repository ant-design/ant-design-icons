
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileMarkdownFillSvg from '@ant-design/icons-svg/lib/fill/FileMarkdownFill';

export default {
  name: 'FileMarkdownFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileMarkdownFillSvg } },
      children
    ),
};
