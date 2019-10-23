
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileImageTwoToneSvg from '@ant-design/icons-svg/lib/twotone/FileImageTwoTone';

export default {
  name: 'IconFileImageTwoTone',
  displayName: 'FileImageTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileImageTwoToneSvg } },
      children
    ),
};
