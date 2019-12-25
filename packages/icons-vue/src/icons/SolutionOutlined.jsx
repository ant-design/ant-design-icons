// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SolutionOutlinedSvg from '@ant-design/icons-svg/lib/asn/SolutionOutlined';

export default {
  name: 'IconSolutionOutlined',
  displayName: 'SolutionOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SolutionOutlinedSvg } },
      children,
    ),
};