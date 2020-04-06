// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileAddFilledSvg from '@ant-design/icons-svg/lib/asn/FileAddFilled';

export default {
  name: 'IconFileAddFilled',
  displayName: 'FileAddFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileAddFilledSvg } },
      children,
    ),
};