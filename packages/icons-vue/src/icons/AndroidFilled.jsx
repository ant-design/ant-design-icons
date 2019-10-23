
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AndroidFillSvg from '@ant-design/icons-svg/lib/fill/AndroidFill';

export default {
  name: 'IconAndroidFilled',
  displayName: 'AndroidFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AndroidFillSvg } },
      children
    ),
};
