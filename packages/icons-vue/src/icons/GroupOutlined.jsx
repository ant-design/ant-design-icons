// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GroupOutlinedSvg from '@ant-design/icons-svg/lib/asn/GroupOutlined';

export default {
  name: 'IconGroupOutlined',
  displayName: 'GroupOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GroupOutlinedSvg } },
      children,
    ),
};