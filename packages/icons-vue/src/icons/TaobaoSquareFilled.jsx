
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TaobaoSquareFillSvg from '@ant-design/icons-svg/lib/fill/TaobaoSquareFill';

export default {
  name: 'IconTaobaoSquareFilled',
  displayName: 'TaobaoSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TaobaoSquareFillSvg } },
      children
    ),
};
