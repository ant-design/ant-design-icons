// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import QuestionCircleFilledSvg from '@ant-design/icons-svg/lib/asn/QuestionCircleFilled';

export default {
  name: 'IconQuestionCircleFilled',
  displayName: 'QuestionCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: QuestionCircleFilledSvg } },
      children,
    ),
};