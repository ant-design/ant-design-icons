
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BuildTwoToneSvg from '@ant-design/icons-svg/lib/twotone/BuildTwoTone';

export default {
  name: 'IconBuildTwoTone',
  displayName: 'BuildTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BuildTwoToneSvg } },
      children
    ),
};
