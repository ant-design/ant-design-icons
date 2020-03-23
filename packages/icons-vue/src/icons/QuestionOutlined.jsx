// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import QuestionOutlinedSvg from '@ant-design/icons-svg/lib/asn/QuestionOutlined';

export default {
  name: 'IconQuestionOutlined',
  displayName: 'QuestionOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: QuestionOutlinedSvg } },
      children,
    ),
};