
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LoadingOutlineSvg from '@ant-design/icons-svg/lib/outline/LoadingOutline';

export default {
  name: 'Loading',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LoadingOutlineSvg } },
      children
    ),
};
