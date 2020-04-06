// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ProfileFilledSvg from '@ant-design/icons-svg/lib/asn/ProfileFilled';

export default {
  name: 'IconProfileFilled',
  displayName: 'ProfileFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ProfileFilledSvg } },
      children,
    ),
};