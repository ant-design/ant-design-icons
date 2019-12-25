// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileZipOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileZipOutlined';

export default {
  name: 'IconFileZipOutlined',
  displayName: 'FileZipOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileZipOutlinedSvg } },
      children,
    ),
};