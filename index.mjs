import fs from 'fs'

let template = fs.readFileSync('./template.json', 'utf8')
template = JSON.stringify(template)

let colors = {
  dark: {
    text: [224, 222, 244],
    base: [25, 23, 36],
    subtle: [144, 140, 170],
    muted: [110, 106, 134],
    overlay: [38, 35, 58],
    highlightMed: [64, 61, 82],
    accent: [235, 188, 186],
    surface: [31, 29, 46],
  },
  moon: {
    text: [224, 222, 244],
    base: [35, 33, 54],
    subtle: [144, 140, 170],
    muted: [110, 106, 134],
    overlay: [57, 53, 82],
    highlightMed: [68, 65, 90],
    accent: [196, 167, 231],
    surface: [42, 39, 63],
  },
  dawn: {
    text: [87, 82, 121],
    base: [250, 244, 237],
    subtle: [121, 117, 147],
    muted: [152, 147, 165],
    overlay: [242, 233, 222],
    highlightMed: [223, 218, 217],
    accent: [40, 105, 131],
    surface: [255, 250, 243],
  },
}

for (let variant of ['dark', 'moon', 'dawn']) {
  let theme = template
  for (let color in colors[variant]) {
    theme = theme.replaceAll(`$${color}`, `[${colors[variant][color]}]`)
  }
  fs.writeFileSync(
    `./rose-pine-${variant}/manifest.json`,
    JSON.parse(theme),
    'utf8'
  )
}
