import { TwitterOutlined, AntDesignOutlined } from '@ant-design/icons-svg';
import { mount } from '@vue/test-utils';
import Icon from '../src/components/IconBase';

describe('Vue AntdIcon Component', () => {
  it('should create SVG element.', () => {
    const iconProps = {
      icon: AntDesignOutlined,
      style: {
        fontSize: '3rem',
      },
      class: 'my-icon',
      hello: 'world',
    };
    const icon = mount({
      render() {
        return <Icon {...iconProps} />;
      },
    });
    expect(icon.html()).toMatchSnapshot();
  });

  it('should allow explicit import.', () => {
    const icon = mount(Icon, { props: { icon: TwitterOutlined } });
    expect(typeof icon.find('path').attributes().d).toBe('string');
  });

  it('should render null, when the type is invalid.', () => {
    const iconWithObjectTypeProp = mount(Icon, { props: { icon: { invalid: true } } });
    expect(iconWithObjectTypeProp.findAll('svg').length).toBe(0);

    const iconWithStringTypeProp = mount(Icon, { props: { icon: 'Later is better than never.' } });
    expect(iconWithStringTypeProp.findAll('svg').length).toBe(0);
  });
});
