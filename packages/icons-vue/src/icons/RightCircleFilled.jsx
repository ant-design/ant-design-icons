// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RightCircleFilledSvg from '@ant-design/icons-svg/lib/asn/RightCircleFilled';

export default {
  name: 'IconRightCircleFilled',
  displayName: 'RightCircleFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RightCircleFilledSvg } },
      children,
    ),
};