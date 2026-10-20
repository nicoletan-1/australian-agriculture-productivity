# FIT3179 Data Visualisation 2 — Moodle Submission Notes & Sketch Guide
**Author:** Eben  
**Date:** October 2026  

---

## 1. Domain, Why, and Who (Copy-Paste into Moodle Template)
* **Domain:** Australian Agricultural Productivity across broadacre cropping, livestock, dairy, and horticulture, evaluated alongside international peers, climate volatility, R&D investment, and structural farm consolidation.
* **Who (Target Audience):** The general Australian public, students, and policy-curious citizens. Specialised econometric concepts such as *Total Factor Productivity (TFP)* and *OECD Producer Support Estimates (PSE)* are introduced in plain English callouts without requiring prior statistical training.
* **Why (User Tasks & Story Goal):** Enable readers to understand how Australian agriculture nearly doubled output efficiency since 1980 despite severe droughts and minimal government subsidies—identifying the three core drivers: cropping technology, rural R&D intensity, and farm-scale consolidation.

## 2. What: The Data Sources
Combines four authoritative institutional sources (total local data size < 450 KB):
1. **ABARES:** *Australian Farm Productivity (Broadacre and Dairy Estimates)*, *Productivity Drivers (Climate-Adjusted TFP)*, *Agricultural R&D Investment*, and *Disaggregating Farm Size*.
2. **Australian Bureau of Statistics (ABS):** *Agricultural Commodities, Australia* and *Value of Agricultural Commodities Produced*.
3. **USDA Economic Research Service (ERS):** *International Agricultural Productivity* country indices.
4. **OECD:** *Agricultural Policy Monitoring and Evaluation 2025 (Australia chapter)*.

## 3. How: Rationale for the 11 Visualisation Idioms (10 Advanced + 1 Annotated Basic)
1. **Choropleth Map (Advanced Map Idiom #1):** Encodes state-level GVAP ($B) and Annual TFP Growth (%) on an Australian Mercator projection with an interactive metric selector.
2. **Proportional Symbol Map (Advanced Map Idiom #2):** Overlays scaled circles for 15 major regional commodity hubs across Australia, encoding production value by circle area and sector by colour, with an interactive sector filter.
3. **Equal-Earth Global Choropleth Map (Advanced Map Idiom #3):** Uses an area-preserving Equal-Earth projection to compare USDA cumulative agricultural TFP growth and OECD subsidy levels globally.
4. **Connected Dot Plot / Dumbbell Chart (Advanced Idiom #4):** Highlights the net productivity wedge between 2024 Input Volume Index and Output Volume Index across 6 farming sectors.
5. **Streamgraph (Advanced Idiom #5):** Reveals the 40-year organic expansion and compositional shift of real gross value across 6 major commodity groups.
6. **Bump Chart (Advanced Idiom #6):** Tracks ordinal ranking shifts every 5 years (1985–2025), clearly illustrating Wool falling from #1 to #6 while Canola/Oilseeds and Horticulture rise.
7. **Annotated Multi-Line Chart with Drought Shock Bands (Basic Idiom #1):** Contrasts volatile observed TFP against smooth Climate-Adjusted TFP, framed by shaded rectangular bands for the Millennium Drought and 2017–19 Eastern Drought.
8. **Heatmap Combined with Marginal Bar Chart (Advanced Idiom #7):** Pairs a 2D State × Year moisture/TFP anomaly matrix (`redyellowgreen` diverging scale) with a right-hand marginal bar chart of mean state volatility.
9. **Lollipop Chart (Advanced Idiom #8):** Encodes annual TFP growth rate on the horizontal stem, R&D intensity (% of GVP) on dot size, and Benefit-Cost Ratio on colour.
10. **Slope Chart (Advanced Idiom #9):** Contrasts 1990s vs. 2020s national output shares across four farm size tiers, dramatising the jump of the top 10% mega-farms from 44% to 69.5%.
11. **Butterfly / Diverging Bar Chart (Advanced Idiom #10):** Places Cost-to-Output Ratio (%) on the left wing and Rate of Return (%) on the right wing across six farm turnover classes to demonstrate economies of scale.
