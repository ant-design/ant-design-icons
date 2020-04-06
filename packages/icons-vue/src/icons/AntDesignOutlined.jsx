// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AntDesignOutlinedSvg from '@ant-design/icons-svg/lib/asn/AntDesignOutlined';

export default {
  name: 'IconAntDesignOutlined',
  displayName: 'AntDesignOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AntDesignOutlinedSvg } },
      children,
    ),
};