import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    "intro",
    "start",
    "changelog",
    "upgrading",
    "license",
    {
      type: "category",
      label: "Using DayPicker",
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "using-daypicker"
        }
      ]
    },
    {
      type: "category",
      label: "Advanced Guides",
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "advanced-guides"
        }
      ]
    }
    // {
    //   type: "category",
    //   label: "Development",
    //   collapsed: true,
    //   items: [
    //     {
    //       type: "autogenerated",
    //       dirName: "development"
    //     }
    //   ]
    // }
  ],
  api: ["api/index", require("./docs/api/typedoc-sidebar.cjs")]
};

export default sidebars;
