// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileImageTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileImageTwoTone';

export default {
  name: 'IconFileImageTwoTone',
  displayName: 'FileImageTwoTone',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileImageTwoToneSvg } },
      children,
    ),
};