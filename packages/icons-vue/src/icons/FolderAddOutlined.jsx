// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FolderAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderAddOutlined';

export default {
  name: 'IconFolderAddOutlined',
  displayName: 'FolderAddOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FolderAddOutlinedSvg } },
      children,
    ),
};