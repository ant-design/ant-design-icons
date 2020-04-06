// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileWordFilledSvg from '@ant-design/icons-svg/lib/asn/FileWordFilled';

export default {
  name: 'IconFileWordFilled',
  displayName: 'FileWordFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileWordFilledSvg } },
      children,
    ),
};