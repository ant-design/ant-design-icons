
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileWordTwoToneSvg from '@ant-design/icons-svg/lib/twotone/FileWordTwoTone';

export default {
  name: 'IconFileWordTwoTone',
  displayName: 'FileWordTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileWordTwoToneSvg } },
      children
    ),
};
