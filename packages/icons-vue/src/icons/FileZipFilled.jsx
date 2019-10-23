
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileZipFillSvg from '@ant-design/icons-svg/lib/fill/FileZipFill';

export default {
  name: 'IconFileZipFilled',
  displayName: 'FileZipFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileZipFillSvg } },
      children
    ),
};
