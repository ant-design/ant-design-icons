
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileUnknownTwoToneSvg from '@ant-design/icons-svg/lib/twotone/FileUnknownTwoTone';

export default {
  name: 'FileUnknownTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileUnknownTwoToneSvg } },
      children
    ),
};
