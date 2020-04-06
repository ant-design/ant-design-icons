// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DingtalkCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DingtalkCircleFilled';

export default {
  name: 'IconDingtalkCircleFilled',
  displayName: 'DingtalkCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DingtalkCircleFilledSvg } },
      children,
    ),
};