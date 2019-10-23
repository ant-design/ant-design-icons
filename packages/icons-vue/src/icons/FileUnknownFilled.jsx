
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileUnknownFillSvg from '@ant-design/icons-svg/lib/fill/FileUnknownFill';

export default {
  name: 'IconFileUnknownFilled',
  displayName: 'FileUnknownFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileUnknownFillSvg } },
      children
    ),
};
