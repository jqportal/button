const data = {
  title: "Design",
  data: [
    [
      { label: "Primary", type: "buttonIcon", iconId: "save", disabled: false, buttonLabel: "Save as... ", state: "default", styleType: "primary", id: "1.1" },
      { label: "Focus state", type: "buttonIcon", iconId: "save", disabled: false, buttonLabel: "Save as... ", state: "focus", styleType: "primary", id: "2.1" },
      { label: "Hover state", type: "buttonIcon", iconId: "save", disabled: false, buttonLabel: "Save as... ", state: "hover", styleType: "primary", id: "3.1" }
    ],
    [
      { label: "Delete", type: "buttonIcon", iconId: "delete", disabled: false, state: "delete", buttonLabel: "Delete ", styleType: "primary", id: "1.2" },
      {},
      { label: "Disabled state", type: "buttonIcon", disabled: true, buttonLabel: "Save as... ", state: "disabled", styleType: "secondary", id: "3.2", disabled: "disabled" }
    ],
    [
      { label: "Secondary", type: "buttonIcon", iconId: "save", disabled: false, buttonLabel: "Save as... ", state: "default", styleType: "secondary", id: "1.3" },
      { label: "Focus", type: "buttonIcon", iconId: "save", disabled: false, buttonLabel: "Save as... ", state: "focus", styleType: "secondary", id: "2.3" },
      { label: "Hover", type: "buttonIcon", iconId: "save", disabled: false, buttonLabel: "Save as... ", state: "hover", styleType: "secondary", id: "3.3" }
    ]
  ]
};

export default data;