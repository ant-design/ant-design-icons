// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MediumCircleFilledSvg from '@ant-design/icons-svg/lib/asn/MediumCircleFilled';

export default {
  name: 'IconMediumCircleFilled',
  displayName: 'MediumCircleFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MediumCircleFilledSvg } },
      children,
    ),
};