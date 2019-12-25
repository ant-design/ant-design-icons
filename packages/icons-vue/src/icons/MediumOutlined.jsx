// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MediumOutlinedSvg from '@ant-design/icons-svg/lib/asn/MediumOutlined';

export default {
  name: 'IconMediumOutlined',
  displayName: 'MediumOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MediumOutlinedSvg } },
      children,
    ),
};