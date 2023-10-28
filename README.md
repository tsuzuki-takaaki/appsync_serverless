## Environment
```sh
% node -v
v18.16.0

% serverless -v
Framework Core: 3.36.0
Plugin: 7.1.0
SDK: 4.4.0
```

## Requirements
- [Serverless Better Credentials](https://github.com/thomasmichaelwallace/serverless-better-credentials)
  - when you wanna use aws sso
  - `% npm install --save-dev serverless-better-credentials`
  - after this, you must add this plugin to `serverless.yml`
- [Serverless Appsync Plugin](https://github.com/sid88in/serverless-appsync-plugin)
  - `% npm install --save-dev serverless-appsync-plugin`
  - after this, you must add this plugin to `serverless.yml`

## Refs
- [Serverless GraphQL with AWS AppSync and DynamoDB](https://vdelacou.medium.com/serverless-graphql-with-aws-appsync-and-dynamodb-3dcbe29f026e)
- [Effective AppSync 〜 Serverless Framework を使用した AppSync の実践的な開発方法とテスト戦略 〜](https://qiita.com/G-awa/items/095faa9a94da09bc3ed5)
- ↑ This two articles' some settings are not a little suitable
  - You should look https://github.com/sid88in/serverless-appsync-plugin/blob/master/doc/upgrading-from-v1.md
  - when you see error message like `Property validation failure: [The property {/Type} is required]` or `TypeError: Cannot read properties of undefined (reading 'schema')`

