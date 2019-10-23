
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import QuestionCircleFillSvg from '@ant-design/icons-svg/lib/fill/QuestionCircleFill';

export default {
  name: 'IconQuestionCircleFilled',
  displayName: 'QuestionCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: QuestionCircleFillSvg } },
      children
    ),
};
