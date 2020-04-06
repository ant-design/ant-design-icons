// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FolderViewOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderViewOutlined';

export default {
  name: 'IconFolderViewOutlined',
  displayName: 'FolderViewOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FolderViewOutlinedSvg } },
      children,
    ),
};