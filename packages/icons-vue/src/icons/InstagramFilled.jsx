// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InstagramFilledSvg from '@ant-design/icons-svg/lib/asn/InstagramFilled';

export default {
  name: 'IconInstagramFilled',
  displayName: 'InstagramFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: InstagramFilledSvg } },
      children,
    ),
};