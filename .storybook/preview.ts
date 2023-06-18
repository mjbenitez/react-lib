import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    argTypes: { theme: { control: 'select', options: ['light', 'dark'] } },
    args: { theme: 'dark' },
  },
};

export default preview;
