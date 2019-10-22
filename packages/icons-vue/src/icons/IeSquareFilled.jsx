
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import IeSquareFillSvg from '@ant-design/icons-svg/lib/fill/IeSquareFill';

export default {
  name: 'IeSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: IeSquareFillSvg } },
      children
    ),
};
