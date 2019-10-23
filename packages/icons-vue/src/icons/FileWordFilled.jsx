
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileWordFillSvg from '@ant-design/icons-svg/lib/fill/FileWordFill';

export default {
  name: 'IconFileWordFilled',
  displayName: 'FileWordFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileWordFillSvg } },
      children
    ),
};
