// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ProjectOutlinedSvg from '@ant-design/icons-svg/lib/asn/ProjectOutlined';

export default {
  name: 'IconProjectOutlined',
  displayName: 'ProjectOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ProjectOutlinedSvg } },
      children,
    ),
};