// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileAddTwoTone';

export default {
  name: 'IconFileAddTwoTone',
  displayName: 'FileAddTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileAddTwoToneSvg } },
      children,
    ),
};