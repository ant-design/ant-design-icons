// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import QuestionCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/QuestionCircleOutlined';

export default {
  name: 'IconQuestionCircleOutlined',
  displayName: 'QuestionCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: QuestionCircleOutlinedSvg } },
      children,
    ),
};