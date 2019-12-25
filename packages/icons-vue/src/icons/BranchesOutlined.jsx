// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BranchesOutlinedSvg from '@ant-design/icons-svg/lib/asn/BranchesOutlined';

export default {
  name: 'IconBranchesOutlined',
  displayName: 'BranchesOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BranchesOutlinedSvg } },
      children,
    ),
};