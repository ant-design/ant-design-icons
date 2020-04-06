// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileUnknownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileUnknownTwoTone';

export default {
  name: 'IconFileUnknownTwoTone',
  displayName: 'FileUnknownTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileUnknownTwoToneSvg } },
      children,
    ),
};