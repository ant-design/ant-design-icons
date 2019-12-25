// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileZipTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileZipTwoTone';

export default {
  name: 'IconFileZipTwoTone',
  displayName: 'FileZipTwoTone',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileZipTwoToneSvg } },
      children,
    ),
};