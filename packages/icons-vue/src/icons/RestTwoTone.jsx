
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RestTwoToneSvg from '@ant-design/icons-svg/lib/twotone/RestTwoTone';

export default {
  name: 'RestTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RestTwoToneSvg } },
      children
    ),
};
