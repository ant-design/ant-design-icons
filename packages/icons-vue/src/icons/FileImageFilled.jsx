
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileImageFillSvg from '@ant-design/icons-svg/lib/fill/FileImageFill';

export default {
  name: 'FileImageFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileImageFillSvg } },
      children
    ),
};
