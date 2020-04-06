// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ProfileOutlinedSvg from '@ant-design/icons-svg/lib/asn/ProfileOutlined';

export default {
  name: 'IconProfileOutlined',
  displayName: 'ProfileOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ProfileOutlinedSvg } },
      children,
    ),
};