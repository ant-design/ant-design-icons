// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FullscreenExitOutlinedSvg from '@ant-design/icons-svg/lib/asn/FullscreenExitOutlined';

export default {
  name: 'IconFullscreenExitOutlined',
  displayName: 'FullscreenExitOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FullscreenExitOutlinedSvg } },
      children,
    ),
};