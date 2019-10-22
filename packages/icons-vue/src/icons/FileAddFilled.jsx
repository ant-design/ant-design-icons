
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileAddFillSvg from '@ant-design/icons-svg/lib/fill/FileAddFill';

export default {
  name: 'FileAddFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileAddFillSvg } },
      children
    ),
};
