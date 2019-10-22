
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FolderFillSvg from '@ant-design/icons-svg/lib/fill/FolderFill';

export default {
  name: 'FolderFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FolderFillSvg } },
      children
    ),
};
