// .storybook/manager.js

import { addons } from "@storybook/addons";
import { create, themes } from "@storybook/theming";

addons.setConfig({
  panelPosition: "right",
  theme: create({
    theme: themes.normal,
    brandTitle: "@bdui - angular",
  }),
});
