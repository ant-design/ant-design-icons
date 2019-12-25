// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CrownOutlinedSvg from '@ant-design/icons-svg/lib/asn/CrownOutlined';

export default {
  name: 'IconCrownOutlined',
  displayName: 'CrownOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CrownOutlinedSvg } },
      children,
    ),
};