
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ApiOutlineSvg from '@ant-design/icons-svg/lib/outline/ApiOutline';

export default {
  name: 'Api',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ApiOutlineSvg } },
      children
    ),
};
