
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AntCloudOutlineSvg from '@ant-design/icons-svg/lib/outline/AntCloudOutline';

export default {
  name: 'IconAntCloud',
  displayName: 'AntCloud',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AntCloudOutlineSvg } },
      children
    ),
};
