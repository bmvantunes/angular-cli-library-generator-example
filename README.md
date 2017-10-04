## This application was generated using [@angular/cli](https://www.npmjs.com/package/@angular/cli) and [nglg](https://www.npmjs.com/package/angular-cli-library-generator):

```
npm install -g @angular/cli
npm install -g angular-cli-library-generator
ng new angular-cli-library-generator-example --style scss --prefix mc
```

@angular/cli options | description
------------ | -------------
--style scss | nglg is optimized to work with scss
--prefix mc  | this is the prefix used in all component' selectors. In this case mc means `my company`. Use one that works well for your company. Otherwise the @angular/cli default is `app`

## Generating a component and documentation with nglg
```
nglg component my-first-component-name
```
or if you prefer
```
nglg c my-first-component-name
```

## How to config nglg to work with @angular/cli
It's super easy to do. 
  1. Just import NglgDemoAppModule inside AppModule
  2. Change app.component.html to only have `<nglg-demo-app></nglg-demo-app>`
  3. Add to styles.scss the following `@import "app/nglg/nglg";`
  4. It's done! For an example, please refer to the [config commit](https://github.com/bmvantunes/angular-cli-library-generator-example/commit/e89390dd8493ca83f6c9fe99833a3ad34c3768e8)
