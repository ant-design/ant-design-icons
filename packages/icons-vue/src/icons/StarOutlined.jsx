// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import StarOutlinedSvg from '@ant-design/icons-svg/lib/asn/StarOutlined';

export default {
  name: 'IconStarOutlined',
  displayName: 'StarOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: StarOutlinedSvg } },
      children,
    ),
};