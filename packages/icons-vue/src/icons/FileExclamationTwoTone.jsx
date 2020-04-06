// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileExclamationTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileExclamationTwoTone';

export default {
  name: 'IconFileExclamationTwoTone',
  displayName: 'FileExclamationTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileExclamationTwoToneSvg } },
      children,
    ),
};