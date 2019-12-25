import { TwitterOutlined, AntDesignOutlined } from '@ant-design/icons-svg';
import { mount } from '@vue/test-utils';
import Icon from '../src/components/IconBase';

describe('Vue AntdIcon Component', () => {
  it('should create SVG element.', () => {
    const iconProps = {
      props: {
        icon: AntDesignOutlined,
      },
      style: {
        fontSize: '3rem',
      },
      class: 'my-icon',
      attrs: { hello: 'world' },
    };
    const icon = mount({
      render() {
        return <Icon {...iconProps} />;
      },
    });
    expect(icon).toMatchSnapshot();
  });

  it('should allow explicit import.', () => {
    const icon = mount(Icon, { context: { props: { icon: TwitterOutlined } } });
    expect(typeof icon.find('path').vnode.data.attrs.d).toBe('string');
  });

  it('should render null, when the type is invalid.', () => {
    const iconWithObjectTypeProp = mount(Icon, { context: { props: { icon: { invalid: true } } } });
    expect(iconWithObjectTypeProp.isEmpty()).toBe(true);

    const iconWithStringTypeProp = mount(Icon, {
      context: {
        props: { icon: 'Later is better than never.' },
      },
    });
    expect(iconWithStringTypeProp.isEmpty()).toBe(true);
  });
});
