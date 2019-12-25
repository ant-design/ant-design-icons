// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UserAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserAddOutlined';

export default {
  name: 'IconUserAddOutlined',
  displayName: 'UserAddOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UserAddOutlinedSvg } },
      children,
    ),
};