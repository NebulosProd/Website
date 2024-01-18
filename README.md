# Nebulos Website

This is the official sourcecode of the [Nebulos.pro](https://nebulos.pro) Website for the Nebulos Discord Bot
## Installation

Clone the repository

```bash
git clone https://github.com/NebulosProd/Website.git
```

Go into the Repository

```bash
cd Website
```

Use [npm](npmjs.com/) to install all the required packages.

```bash
npm i
```

Insert your .pem certificate files into the folder (fullchain.pem & privkey.pem)

## Start

```bash
node .
```

### You can access your Website now on https://domain.com/
You can change your settings in the [config.json](https://github.com/NebulosProd/Website/blob/main/config.json)
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.


### Repository Tree
```
📦 Website
├─ .gitignore
├─ LICENSE                     # License File
├─ README.md                   # ALl informations about the Project
├─ assets                      # Assets for the Website
│  ├─ css                      # CSS Folder to store all CSS Files.
│  │  └─ style.css             # Main CSS File
│  ├─ images                   # Image Folder to store all Images.
│  │  ├─ image.png             # "Bot Picture"
│  │  ├─ logowhite.svg         # "White Nebulos Banner"
│  │  └─ stats-banner.png      # "Map with Dots"
│  └─ js                       # JavaScript Folder to store all JS Files.
│     └─ script.js             # Main JavaScript FIle
├─ config.json                 # Config for the project
├─ index.js                    # Start file and "Brain"
├─ package-lock.json           # Packages
├─ package.json                # Packages
└─ views                       # Folder for all the View Templates
   ├─ index.ejs                # Main Site View Template
   ├─ privacy.ejs              # Privacy Site View Template
   └─ tos.ejs                  # Terms Of Service View Template
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
