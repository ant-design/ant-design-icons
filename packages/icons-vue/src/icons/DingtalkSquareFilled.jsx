
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DingtalkSquareFillSvg from '@ant-design/icons-svg/lib/fill/DingtalkSquareFill';

export default {
  name: 'IconDingtalkSquareFilled',
  displayName: 'DingtalkSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DingtalkSquareFillSvg } },
      children
    ),
};
