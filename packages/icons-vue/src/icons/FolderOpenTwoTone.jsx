// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FolderOpenTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderOpenTwoTone';

export default {
  name: 'IconFolderOpenTwoTone',
  displayName: 'FolderOpenTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FolderOpenTwoToneSvg } },
      children,
    ),
};