
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FilePdfTwoToneSvg from '@ant-design/icons-svg/lib/twotone/FilePdfTwoTone';

export default {
  name: 'IconFilePdfTwoTone',
  displayName: 'FilePdfTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FilePdfTwoToneSvg } },
      children
    ),
};
