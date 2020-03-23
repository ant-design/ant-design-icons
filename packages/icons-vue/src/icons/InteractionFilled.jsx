// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InteractionFilledSvg from '@ant-design/icons-svg/lib/asn/InteractionFilled';

export default {
  name: 'IconInteractionFilled',
  displayName: 'InteractionFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: InteractionFilledSvg } },
      children,
    ),
};