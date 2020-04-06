// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileImageFilledSvg from '@ant-design/icons-svg/lib/asn/FileImageFilled';

export default {
  name: 'IconFileImageFilled',
  displayName: 'FileImageFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileImageFilledSvg } },
      children,
    ),
};