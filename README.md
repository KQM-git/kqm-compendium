# KQM Compendium

## Build

### Requirements
* [Node.js](http://nodejs.org) 14+ (Latest verion of LTS is recommended, webpack does not work with Node.js 17+)
* [npm](https://docs.npmjs.com/try-the-latest-stable-version-of-npm) 6.1+

### Tools
* [Visual Studio Code](https://code.visualstudio.com/) with the following plugins:
    * [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    * [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
    * [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
* Alternatively, [WebStorm](https://www.jetbrains.com/webstorm/) can also be used.

### Setup
After cloning the repository, run:
```bash
# Install dependencies
$ npm install
```
To run the project locally, run:
```bash
# Serve a local server with hot reload at localhost:3000
$ npm run dev
```
To build the project for deployment, run:
```bash
# Generate static project
$ npm run generate
```
To lint the porject, run:
```bash
# Lint the project
$ npm run lint
```
## Project Structure
- **`.nuxt`**: contains the dynamically generated files when `npm run dev` is used. *Ignored by Git*.
- **`assets`**: contains the un-complied assets such as images or fonts.
    - **`artifacts`**
    - **`character_thumbnails`**
    - **`icons`**
    - **`weapons`**
- **`components`**: contains all the `.Vue` components used on the website.
- **`content`**: contains all the Markdown, JSON and CSV files used on the website. A MongoDB-like API is exposed on `localhost:3000/_content/`.
- **`dist`**: contains the dynamically generated files when `npm run generate` is used. *Ignored by Git*.
- **`layouts`**: contains all the layouts used by the site. The default layout, `default.vue`, is used if not specified.
- **`models`**: contains the models and classes used by the website.
- **`page`**: contains all the views and routes used on the website. Nuxt automatically creates a page for every `.vue` files inside the directory. The routing configuration is also automatically generated.
- **`plugins`**: contains all plugins used on the website.
- **`static`**: contains all static files used on the website such as `favicon.ico` and `robots.txt`. All files in the directory are served at root.
- **`store`**: contains all Vuex store files used on the website.
- `nuxtconfig.js`: the Nuxt.js configuration file.
- `tailwind.config.js`: the tailwindcss configuration file.
- `tsconfig.js`: the TypeScript configuration file.