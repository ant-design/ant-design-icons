// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LoginOutlinedSvg from '@ant-design/icons-svg/lib/asn/LoginOutlined';

export default {
  name: 'IconLoginOutlined',
  displayName: 'LoginOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LoginOutlinedSvg } },
      children,
    ),
};