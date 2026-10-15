# Back to the Show? Australia's Cultural Comeback

FIT3179 Data Visualisation 2 (Semester 2, 2026) by Adam Rizq Rozman.

**Research question:** Has Australians' return to cultural life after COVID-19 been shared equally across age groups and regions, or has rising cost changed who participates?

## Run locally

Vega loads the data with `fetch`, so the page has to be served over HTTP. Opening the file directly will not work:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Layout

```
index.html          page and narrative (Pure.css grid layout)
css/style.css       typography and grid gutters
js/main.js          shared chart theme, embeds every spec
js/*.vg.json        one human-readable Vega-Lite (or Vega, for the treemap) spec per chart
js/aus_states.topojson  state boundaries (TopoJSON, ~95 KB, converted with mapshaper)
data/               CSV inputs (see the provenance list below)
sketch/             put the scanned A4 sketch PDF here
```

## Charts

| # | Spec (in `js/`) | Idiom | Data file |
|---|------|-------|-----------|
| 1 | `s1_waffle` | Waffle chart | `naps_headline.csv` |
| 2 | `s2_connected_scatter` | Connected scatterplot | `lpa_national.csv` |
| 3 | `s2_bump` | Bump chart | `lpa_genre_year.csv` |
| 4 | `s3_dumbbell` | Dumbbell chart | `abs_attendance_age.csv` |
| 5 | `s3_heatmap` | Heatmap | `abs_attendance_age_venue.csv` |
| 6 | `s3_slope_multiples` | Small-multiple slope charts | `naps_artform_year.csv` |
| 7 | `s4_choropleth` | **Map 1:** choropleth linked to a diverging bar | `abs_attendance_state.csv` |
| 8 | `s4_symbol_map` | **Map 2:** proportional symbol map | `lpa_state.csv`, `abs_population_state.csv`, `state_capitals.csv` |
| 9 | `s4_dot_map` | **Map 3:** dot distribution map | `venues_osm.csv` |
| 10 | `s5_barriers_change` | Diverging bar | `naps_barriers_year.csv` |
| 11 | `s5_treemap` | Treemap (Vega) | `lpa_genre_year.csv` (2024 rows) |
| 12 | `s5_cost_impact` | Diverging stacked bar | `naps_cost_impact.csv` |
| 13 | `s5_who_attends` | Dot plot against a national reference line | `naps_attendance_groups.csv` |

All maps use an equal-area conic projection (standard parallels 18°S and 36°S), so the areas of states can be compared fairly.

## Data provenance

Every value is copied from the published source. Scripts read the ABS spreadsheets and the LPA report tables directly; the Creative Australia figures were read from the report's text and chart labels.

- [x] **`abs_attendance_state.csv`**: ABS 4114.0 2017–18, Table 1, and *Cultural and Creative Activities 2021–22*, Table 14. Row "Total attending at least one venue or event", attendance rate (%), persons aged 15+.
- [x] **`abs_attendance_age.csv`**: ABS 4114.0 2017–18, Table 3, and 2021–22, Table 16. Persons, attendance rate (%).
- [x] **`abs_attendance_age_venue.csv`**: ABS 2021–22, Table 16. Persons, attendance rate (%) by venue type.
- [x] **`abs_population_state.csv`**: ABS *National, state and territory population*, Table 4, June 2024.
- [x] **`lpa_national.csv`**: LPA *Live Performance Attendance and Revenue Report 2024* (EY, September 2025), page 8. Tickets in millions, revenue in $ millions, average ticket price in $.
- [x] **`lpa_genre_year.csv`**: same report, "National Overview" table for each of the 12 categories (pages 53–86). Revenue in $ millions. The 2024 Circus and Physical Theatre figures exclude Cirque du Soleil's *Luzia* tour.
- [x] **`lpa_state.csv`**: same report, pages 29–30. Revenue in $ millions.
- [x] **`naps_headline.csv`**: Creative Australia, *Creative Transformations: Results of the National Arts Participation Survey* (2026), Figure 21.
- [x] **`naps_artform_year.csv`**: same report, page 83 (2025 and 2022 values in the text) and Figure 21.
- [x] **`naps_barriers_year.csv`**: same report, Figure 29 (page 100 of the printed report).
- [x] **`naps_cost_impact.csv`**: same report, Figure 30. "Agree" combines strongly agree and agree; "Disagree" combines disagree and strongly disagree.
- [x] **`naps_attendance_groups.csv`**: same report, "Who attends live arts events or festivals?" (printed page 84).
- [x] **`venues_osm.csv`**: OpenStreetMap export (2,863 venues, October 2026) of `tourism=museum`, `tourism=gallery` and `amenity=theatre` for Australia (via overpass-turbo.eu, exported as CSV). Columns `name,type,lat,lon`, with `type` set to `Museum`, `Gallery` or `Theatre`. Keep the file under about 1 MB.

## Sources

- Australian Bureau of Statistics, *Cultural and creative activities, 2021–22*: https://www.abs.gov.au/statistics/people/people-and-communities/cultural-and-creative-activities/2021-22 (CC BY 4.0)
- Australian Bureau of Statistics, *Attendance at Selected Cultural Venues and Events, Australia* (4114.0): https://www.abs.gov.au/ausstats/abs%40.nsf/mf/4114.0
- Creative Australia, *Creative Transformations: Results of the National Arts Participation Survey* (2026): https://www.creative.gov.au/research/creative-transformations-results-national-arts-participation-survey
- Live Performance Australia, *Ticket Attendance and Revenue Report*: https://liveperformance.com.au/
- State boundaries: https://github.com/rowanhogan/australian-states (derived from ABS ASGS), converted to TopoJSON with mapshaper
- Venues: © OpenStreetMap contributors, ODbL

## AI acknowledgement

Claude (Anthropic) was used to scaffold the page structure and chart specifications. All data values, narrative text and the hand-drawn sketch are the author's own.
