// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileWordTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileWordTwoTone';

export default {
  name: 'IconFileWordTwoTone',
  displayName: 'FileWordTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileWordTwoToneSvg } },
      children,
    ),
};