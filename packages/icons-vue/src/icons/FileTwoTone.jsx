
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileTwoToneSvg from '@ant-design/icons-svg/lib/twotone/FileTwoTone';

export default {
  name: 'IconFileTwoTone',
  displayName: 'FileTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileTwoToneSvg } },
      children
    ),
};
