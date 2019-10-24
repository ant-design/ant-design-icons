
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DislikeFillSvg from '@ant-design/icons-svg/lib/fill/DislikeFill';

export default {
  name: 'IconDislikeFilled',
  displayName: 'DislikeFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DislikeFillSvg } },
      children
    ),
};
