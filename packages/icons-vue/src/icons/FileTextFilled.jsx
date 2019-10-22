
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileTextFillSvg from '@ant-design/icons-svg/lib/fill/FileTextFill';

export default {
  name: 'FileTextFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileTextFillSvg } },
      children
    ),
};
