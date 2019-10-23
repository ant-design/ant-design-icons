
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileTextTwoToneSvg from '@ant-design/icons-svg/lib/twotone/FileTextTwoTone';

export default {
  name: 'IconFileTextTwoTone',
  displayName: 'FileTextTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileTextTwoToneSvg } },
      children
    ),
};
