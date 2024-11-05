library(rmarkdown)
library(jsonlite)
library(readr)

readme_path <- '../../README.md'

doc <- list(
  overview = read_file(readme_path)
)

json_data <- toJSON(doc, pretty = TRUE)
write(json_data, 'readme.json')
