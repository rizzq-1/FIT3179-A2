// Shared look for every chart, so the specs in /specs stay focused on encoding.
const theme = {
  background: null,
  font: "Source Sans 3",
  view: { stroke: null },
  title: { font: "Fraunces", fontSize: 16, fontWeight: 600, anchor: "start", color: "#1b1a18" },
  axis: {
    labelColor: "#52514e",
    titleColor: "#52514e",
    labelFontSize: 12,
    titleFontSize: 12,
    titleFontWeight: 600,
    gridColor: "#ece9e3",
    domainColor: "#c9c6bf",
    tickColor: "#c9c6bf"
  },
  legend: { labelColor: "#52514e", titleColor: "#52514e", labelFontSize: 12, titleFontSize: 12 },
  header: { labelFont: "Source Sans 3", labelFontSize: 13, labelColor: "#1b1a18" },
  range: {
    // Categorical order from the validated reference palette (blue, orange, aqua).
    category: ["#2a78d6", "#eb6834", "#1baf7a", "#eda100", "#e87ba4", "#008300", "#4a3aa7", "#e34948"]
  }
};

// Element id → spec file.
const charts = {
  "vis-waffle": "js/s1_waffle.vg.json",
  "vis-connected": "js/s2_connected_scatter.vg.json",
  "vis-bump": "js/s2_bump.vg.json",
  "vis-dumbbell": "js/s3_dumbbell.vg.json",
  "vis-heatmap": "js/s3_heatmap.vg.json",
  "vis-slopes": "js/s3_slope_multiples.vg.json",
  "vis-choropleth": "js/s4_choropleth.vg.json",
  "vis-symbol": "js/s4_symbol_map.vg.json",
  "vis-dots": "js/s4_dot_map.vg.json",
  "vis-barriers": "js/s5_barriers_change.vg.json",
  "vis-cost-impact": "js/s5_cost_impact.vg.json",
  "vis-who": "js/s5_who_attends.vg.json",
  "vis-treemap": "js/s5_treemap.vg.json"
};

for (const [id, spec] of Object.entries(charts)) {
  vegaEmbed("#" + id, spec, { actions: false, config: theme }).catch((err) => {
    console.error(spec, err);
    document.getElementById(id).textContent = "Chart failed to load: " + spec;
  });
}
