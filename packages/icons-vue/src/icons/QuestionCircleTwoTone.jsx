
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import QuestionCircleTwoToneSvg from '@ant-design/icons-svg/lib/twotone/QuestionCircleTwoTone';

export default {
  name: 'QuestionCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: QuestionCircleTwoToneSvg } },
      children
    ),
};
