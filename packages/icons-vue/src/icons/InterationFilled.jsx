
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InterationFillSvg from '@ant-design/icons-svg/lib/fill/InterationFill';

export default {
  name: 'IconInterationFilled',
  displayName: 'InterationFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InterationFillSvg } },
      children
    ),
};
