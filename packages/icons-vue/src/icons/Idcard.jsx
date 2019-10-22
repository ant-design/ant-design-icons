
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import IdcardOutlineSvg from '@ant-design/icons-svg/lib/outline/IdcardOutline';

export default {
  name: 'Idcard',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: IdcardOutlineSvg } },
      children
    ),
};
