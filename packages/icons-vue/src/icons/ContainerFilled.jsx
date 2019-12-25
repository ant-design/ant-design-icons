// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ContainerFilledSvg from '@ant-design/icons-svg/lib/asn/ContainerFilled';

export default {
  name: 'IconContainerFilled',
  displayName: 'ContainerFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ContainerFilledSvg } },
      children,
    ),
};