// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TrophyOutlinedSvg from '@ant-design/icons-svg/lib/asn/TrophyOutlined';

export default {
  name: 'IconTrophyOutlined',
  displayName: 'TrophyOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TrophyOutlinedSvg } },
      children,
    ),
};