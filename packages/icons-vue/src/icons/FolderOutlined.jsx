// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FolderOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderOutlined';

export default {
  name: 'IconFolderOutlined',
  displayName: 'FolderOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FolderOutlinedSvg } },
      children,
    ),
};