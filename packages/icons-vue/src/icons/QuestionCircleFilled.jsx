
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import QuestionCircleFillSvg from '@ant-design/icons-svg/lib/fill/QuestionCircleFill';

export default {
  name: 'QuestionCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: QuestionCircleFillSvg } },
      children
    ),
};
