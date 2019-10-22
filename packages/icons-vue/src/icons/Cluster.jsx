
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ClusterOutlineSvg from '@ant-design/icons-svg/lib/outline/ClusterOutline';

export default {
  name: 'Cluster',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ClusterOutlineSvg } },
      children
    ),
};
