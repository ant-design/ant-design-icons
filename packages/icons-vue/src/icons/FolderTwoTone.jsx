// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FolderTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderTwoTone';

export default {
  name: 'IconFolderTwoTone',
  displayName: 'FolderTwoTone',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FolderTwoToneSvg } },
      children,
    ),
};