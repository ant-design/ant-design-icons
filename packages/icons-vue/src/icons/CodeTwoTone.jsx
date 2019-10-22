
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CodeTwoToneSvg from '@ant-design/icons-svg/lib/twotone/CodeTwoTone';

export default {
  name: 'CodeTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CodeTwoToneSvg } },
      children
    ),
};
