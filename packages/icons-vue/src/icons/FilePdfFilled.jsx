// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FilePdfFilledSvg from '@ant-design/icons-svg/lib/asn/FilePdfFilled';

export default {
  name: 'IconFilePdfFilled',
  displayName: 'FilePdfFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FilePdfFilledSvg } },
      children,
    ),
};