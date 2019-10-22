
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import IdcardTwoToneSvg from '@ant-design/icons-svg/lib/twotone/IdcardTwoTone';

export default {
  name: 'IdcardTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: IdcardTwoToneSvg } },
      children
    ),
};
