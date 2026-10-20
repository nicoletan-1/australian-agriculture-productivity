const CHARTS = [
  { id: "#vis01", spec: "specs/01_map_choropleth_gvap.vg.json" },
  { id: "#vis02", spec: "specs/02_map_proportional_commodities.vg.json" },
  { id: "#vis03", spec: "specs/03_map_global_tfp.vg.json" },
  { id: "#vis04", spec: "specs/04_dumbbell_sector_input_output.vg.json" },
  { id: "#vis05", spec: "specs/05_streamgraph_commodity_value.vg.json" },
  { id: "#vis06", spec: "specs/06_bump_commodity_ranks.vg.json" },
  { id: "#vis07", spec: "specs/07_multiline_climate_tfp.vg.json" },
  { id: "#vis08", spec: "specs/08_heatmap_climate_matrix.vg.json" },
  { id: "#vis09", spec: "specs/09_lollipop_rd_investment.vg.json" },
  { id: "#vis10", spec: "specs/10_slope_farm_consolidation.vg.json" },
  { id: "#vis11", spec: "specs/11_butterfly_farm_scale.vg.json" }
];

document.addEventListener("DOMContentLoaded", () => {
  const embedOpts = { actions: { export: true, source: false, compiled: false, editor: false } };
  CHARTS.forEach(({ id, spec }) => {
    vegaEmbed(id, spec, embedOpts).catch(err => {
      console.error("Error rendering " + spec, err);
    });
  });
});
