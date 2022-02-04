import { Meta, Story } from '@storybook/react';

import { IconLink, IconLinkProps } from './IconLink';

const meta: Meta = {
  title: 'Components/Elements/IconLink',
  component: IconLink,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IconLinkProps> = (props) => <IconLink {...props} />;

export const Primary = Template.bind({});
Primary.args = { src: 'https://github.com/' };
