// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TrophyFilledSvg from '@ant-design/icons-svg/lib/asn/TrophyFilled';

export default {
  name: 'IconTrophyFilled',
  displayName: 'TrophyFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TrophyFilledSvg } },
      children,
    ),
};