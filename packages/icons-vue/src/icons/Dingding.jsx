
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DingdingOutlineSvg from '@ant-design/icons-svg/lib/outline/DingdingOutline';

export default {
  name: 'Dingding',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DingdingOutlineSvg } },
      children
    ),
};
