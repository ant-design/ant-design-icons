
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EditFillSvg from '@ant-design/icons-svg/lib/fill/EditFill';

export default {
  name: 'EditFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EditFillSvg } },
      children
    ),
};
