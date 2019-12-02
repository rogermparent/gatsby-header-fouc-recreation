# Gatsby "Flash of Unstyled Content" bug recreation

Made for [this issue on Gatsby's spectrum.chat](https://spectrum.chat/gatsby-js/general/how-to-prevent-ugly-flash-from-loading-slow-rendering~3c7d8c61-6cf7-4829-a322-d930160b97d5)

The primary issue here is that `styled-components`-esque plugins can't statically generate styles when basing them off the global `window` object. On first serve, the Header's prop-dependent styles will not work, even with Linaria.

When setting the `path` from `window`, doing it on mount with `componentDidMount` or `useEffect` will force the header component to update *after* the static generation, causing a 'flash of unstyled content' between the initial serve and when the client-side JS runs. This is evidenced by the content never updating styles if NoScript is active.

The solution to this problem is to avoid using `window` to get the current path name. There are many solutions to do this, and they vary depending on how the Gatsby site is making pages.

For something simple like the default starter that just exports components from js files in `src/pages`, this can take the form of a hard-coded prop in the `index.js` page component (represented in the `fix` branch). For a Markdown site, it'd probably be passed through GraphQL or the `createPage` `context`.

## How to run

### Recreated Issue

```sh
git pull https://github.com/rogermparent/gatsby-header-fouc-recreation.git
yarn
gatsby build && gatsby serve
```

You'll have to use `build` and `serve`, as opposed to `develop`, as the bug is inherently tied to static generation and `develop` doesn't do that.

### Example Fix

```sh
git checkout fix
gatsby build && gatsby serve
```
