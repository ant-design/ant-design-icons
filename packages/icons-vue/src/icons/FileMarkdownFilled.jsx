// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileMarkdownFilledSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownFilled';

export default {
  name: 'IconFileMarkdownFilled',
  displayName: 'FileMarkdownFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileMarkdownFilledSvg } },
      children,
    ),
};