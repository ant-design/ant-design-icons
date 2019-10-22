
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PlusCircleFillSvg from '@ant-design/icons-svg/lib/fill/PlusCircleFill';

export default {
  name: 'PlusCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlusCircleFillSvg } },
      children
    ),
};
