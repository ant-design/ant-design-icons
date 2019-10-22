
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import QuestionCircleOutlineSvg from '@ant-design/icons-svg/lib/outline/QuestionCircleOutline';

export default {
  name: 'QuestionCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: QuestionCircleOutlineSvg } },
      children
    ),
};
