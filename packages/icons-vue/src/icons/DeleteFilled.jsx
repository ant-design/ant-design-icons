
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DeleteFillSvg from '@ant-design/icons-svg/lib/fill/DeleteFill';

export default {
  name: 'DeleteFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DeleteFillSvg } },
      children
    ),
};
