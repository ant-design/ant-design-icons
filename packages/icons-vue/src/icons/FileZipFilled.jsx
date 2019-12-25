// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileZipFilledSvg from '@ant-design/icons-svg/lib/asn/FileZipFilled';

export default {
  name: 'IconFileZipFilled',
  displayName: 'FileZipFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileZipFilledSvg } },
      children,
    ),
};