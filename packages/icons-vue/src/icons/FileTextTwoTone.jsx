// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileTextTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileTextTwoTone';

export default {
  name: 'IconFileTextTwoTone',
  displayName: 'FileTextTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileTextTwoToneSvg } },
      children,
    ),
};