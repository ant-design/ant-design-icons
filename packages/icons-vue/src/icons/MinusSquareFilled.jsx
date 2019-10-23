
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MinusSquareFillSvg from '@ant-design/icons-svg/lib/fill/MinusSquareFill';

export default {
  name: 'IconMinusSquareFilled',
  displayName: 'MinusSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MinusSquareFillSvg } },
      children
    ),
};
