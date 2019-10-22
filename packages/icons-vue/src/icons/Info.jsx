
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InfoOutlineSvg from '@ant-design/icons-svg/lib/outline/InfoOutline';

export default {
  name: 'Info',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InfoOutlineSvg } },
      children
    ),
};
