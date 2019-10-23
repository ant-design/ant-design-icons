
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BulbFillSvg from '@ant-design/icons-svg/lib/fill/BulbFill';

export default {
  name: 'IconBulbFilled',
  displayName: 'BulbFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BulbFillSvg } },
      children
    ),
};
