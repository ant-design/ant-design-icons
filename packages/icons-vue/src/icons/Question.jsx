
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import QuestionOutlineSvg from '@ant-design/icons-svg/lib/outline/QuestionOutline';

export default {
  name: 'IconQuestion',
  displayName: 'Question',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: QuestionOutlineSvg } },
      children
    ),
};
