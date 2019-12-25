// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BackwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/BackwardOutlined';

export default {
  name: 'IconBackwardOutlined',
  displayName: 'BackwardOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BackwardOutlinedSvg } },
      children,
    ),
};