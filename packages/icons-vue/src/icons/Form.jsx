
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FormOutlineSvg from '@ant-design/icons-svg/lib/outline/FormOutline';

export default {
  name: 'Form',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FormOutlineSvg } },
      children
    ),
};
