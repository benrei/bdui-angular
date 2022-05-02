```sh
ng new bdui-angular --create-application false
cd bdui-angular
ng generate library @bdui/ngx-core
ng generate library @bdui/ngx-ag-grid
npx sb init
npm i @storybook/storybook-deployer --save-dev # See 1
ng add @angular-eslint/schematics
npm install prettier --save-dev # See 2
ng g @angular-eslint/schematics:add-eslint-to-project @bdui/ngx-core # See 3
ng g @angular-eslint/schematics:add-eslint-to-project @bdui/ngx-ag-grid # See 3
```

1. Add NPM script to `package.json`
   ```json
   {
     "scripts": {
       "deploy-storybook": "storybook-to-ghpages"
     }
   }
   ```
2. Create `.prettierrc.json` and paste:
   ```json
   {
     "tabWidth": 2,
     "useTabs": false,
     "singleQuote": true,
     "semi": true,
     "bracketSpacing": true,
     "arrowParens": "avoid",
     "trailingComma": "es5",
     "bracketSameLine": true,
     "printWidth": 80
   }
   ```
3. Update projects `.eslintrc.json` to:
   ```json
   {
     "extends": "../../../.eslintrc.json",
     "ignorePatterns": ["!**/*"],
     "overrides": [
       {
         "files": ["*.ts"],
         "parserOptions": {
           "project": [
             "projects/bdui/ngx-ag-grid/tsconfig.lib.json",
             "projects/bdui/ngx-ag-grid/tsconfig.spec.json"
           ],
           "createDefaultProgram": true
         },
         "rules": {
           "@angular-eslint/directive-selector": [
             "error",
             {
               "type": "attribute",
               "prefix": "bd",
               "style": "camelCase"
             }
           ],
           "@angular-eslint/component-selector": [
             "error",
             {
               "type": "element",
               "prefix": "bd",
               "style": "kebab-case"
             }
           ]
         }
       },
       {
         "files": ["*.html"],
         "rules": {}
       }
     ]
   }
   ```
