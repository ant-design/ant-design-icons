
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileUnknownOutlineSvg from '@ant-design/icons-svg/lib/outline/FileUnknownOutline';

export default {
  name: 'IconFileUnknown',
  displayName: 'FileUnknown',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileUnknownOutlineSvg } },
      children
    ),
};
