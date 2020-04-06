// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EnterOutlinedSvg from '@ant-design/icons-svg/lib/asn/EnterOutlined';

export default {
  name: 'IconEnterOutlined',
  displayName: 'EnterOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EnterOutlinedSvg } },
      children,
    ),
};