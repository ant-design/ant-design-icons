// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ProjectFilledSvg from '@ant-design/icons-svg/lib/asn/ProjectFilled';

export default {
  name: 'IconProjectFilled',
  displayName: 'ProjectFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ProjectFilledSvg } },
      children,
    ),
};