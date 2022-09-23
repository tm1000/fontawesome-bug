This repo demonstrates a bug with fontawesome's [svg-core](https://fontawesome.com/docs/web/dig-deeper/svg-core) and a next.js ssr site. in the server the error will be `Could not find icon { prefix: 'fas', iconName: 'bars' }` however it will work fine client side.

### Installation

```
npm install
npm run dev
```

go to http://localhost:3000

You will be hydration errors and the nextjs logs will state the following:

```
event - compiled client and server successfully in 172 ms (194 modules)
Could not find icon { prefix: 'fas', iconName: 'bars' }
```
