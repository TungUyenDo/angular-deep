## Directories
```
styles/
|– abstracts/
|   |– _variables.scss        # Sass Variables
|   |– _functions.scss        # Sass Functions
|   |– _mixins.scss           # Sass Mixins
|   |– _placeholder.scss      # Placeholders helpers
|
|– base/
|   |– _normalize.scss        # Reset/normalize
|   |– _typography.scss       # Typography rules
|   |– _fonts.scss            # Reset/normalize
|   ...                       # Etc…
|
|– components/
|   |– _buttons.scss          # Buttons
|   |– _carousel.scss         # Carousel
|   |– _cover.scss            # Cover
|   |– _dropdown.scss         # Dropdown
|   ...                       # Etc…
|
|– layout/
|   |– _grid.scss             # Grid system
|   ...                       # Etc…
|
|– vendors/
|   |– _bootstrap.scss        # Bootstrap
|   |– _jquery-ui.scss        # jQuery UI
|   ...                       # Etc…
|
|
`– main.scss                  # Primary Sass file
```

### ABSTRACTS FOLDER

The abstracts/ folder gathers all Sass tools and helpers used across the project. Every global variable, function, mixin and placeholder should be put in here.

The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own. These are nothing but Sass helpers.

 -   _variables.scss
 -   _mixins.scss
 -   _functions.scss
 -   _placeholders.scss
 
When working on a very large project with a lot of abstract utilities, it might be interesting to group them by topic rather than type, for instance typography (_typography.scss), theming (_theming.scss), etc. Each file contains all the related helpers: variables, functions, mixins and placeholders. Doing so can make the code easier to browse and maintain, especially when files are getting very long.

> **Note -** The `abstracts/` folder might also be called `utilities/` or `helpers/`, depending on what you prefer.


### BASE FOLDER

The `base/` folder holds what we might call the boilerplate code for the project. In there, you might find the reset file, some typographic rules, and probably a stylesheet, defining some standard styles for commonly used HTML elements.

 -   _base.scss
 -   _normalize.scss
 -   _typography.scss

> **Note -** If your project uses *a lot* of CSS animations, 
you might consider adding an `\_animations.scss` file in there containing the `@keyframes` definitions of all your animations. 
If you only use a them sporadically, let them live along the selectors that use them.

### COMPONENTS FOLDER

For smaller components, there is the `components/` folder. While `layout/` is macro (defining the global wireframe), `components/` is more focused on widgets. It contains all kind of specific modules like a slider, a loader, a widget, and basically anything along those lines. There are usually a lot of files in `components/` since the whole site/application should be mostly composed of tiny modules.

### LAYOUT FOLDER

The `layout/` folder contains everything that takes part in laying out the site or application. This folder could have stylesheets for the main parts of the site (header, footer, navigation, sidebar…), the grid system or even CSS styles for all the forms.

### PAGES FOLDER

If you have page-specific styles, it is better to put them in a `pages/` folder, in a file named after the page. For instance, it’s not uncommon to have very specific styles for the home page hence the need for a `_home.scss` file in `pages/`.


### VENDORS FOLDER

And last but not least, most projects will have a `vendors/` folder containing all the CSS files from external libraries and frameworks – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, and so on. Putting those aside in the same folder is a good way to say “Hey, this is not from me, not my code, not my responsibility”.

If you have to override a section of any vendor, I recommend you have an 8th folder called `vendors-extensions/` in which you may have files named exactly after the vendors they overwrite.

For instance, `vendors-extensions/_boostrap.scss` is a file containing all CSS rules intended to re-declare some of Bootstrap’s default CSS. This is to avoid editing the vendor files themselves, which is generally not a good idea.


### Acknowledgements
In developing my Sass directory structure, I relied heavily on best practices established by the broader web development community. In particular, each of the following articles played an influence in some of the conventions I have adopted.
- [SASS Project Structure for Big Projects](https://medium.com/@dannyhuang_75970/sass-project-structure-for-big-projects-8c4a740846ee) by [Danny Huang](https://github.com/kuanhsuh)
- [Architecture for a Sass Project](http://www.sitepoint.com/architecture-sass-project/) by [Hugo Giraudel](https://github.com/HugoGiraudel)
- [How to Structure a Sass Project](http://thesassway.com/beginner/how-to-structure-a-sass-project) by [John W. Long](http://wiseheartdesign.com/)
- [Using the 7–1 Sass/SCSS Pattern with Angular 7](https://medium.com/@aaronverones/using-the-7-1-sass-scss-pattern-with-angular-7-bb210c015dcc) by [Aaron Verones](https://aaronverones.com)
