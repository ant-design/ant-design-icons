// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ItalicOutlinedSvg from '@ant-design/icons-svg/lib/asn/ItalicOutlined';

export default {
  name: 'IconItalicOutlined',
  displayName: 'ItalicOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ItalicOutlinedSvg } },
      children,
    ),
};