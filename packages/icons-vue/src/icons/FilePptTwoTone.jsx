
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FilePptTwoToneSvg from '@ant-design/icons-svg/lib/twotone/FilePptTwoTone';

export default {
  name: 'IconFilePptTwoTone',
  displayName: 'FilePptTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FilePptTwoToneSvg } },
      children
    ),
};
