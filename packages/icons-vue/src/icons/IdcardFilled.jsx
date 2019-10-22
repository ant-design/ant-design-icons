
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import IdcardFillSvg from '@ant-design/icons-svg/lib/fill/IdcardFill';

export default {
  name: 'IdcardFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: IdcardFillSvg } },
      children
    ),
};
