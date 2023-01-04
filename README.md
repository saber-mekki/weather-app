# Weather-app

This project was bootstrapped using [Create React App](https://github.com/facebook/create-react-app) with `typescript` template.
Our project respect [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) spec).

### Technologies

-   React (functional components with hooks)
-   Typescript (JavaScript with `types system` and more)
-   Yarn (the node modules manager)
-   react-bootstrap (CSS framework)

### Packages
-   react-select-country-list, check out the [documentation](https://www.npmjs.com/package/react-select-country-list)
-   moment, check out the [documentation](https://momentjs.com/)

### Folder structure

<pre>
	.
	├── package.json
	├── .env.example // env variables
	├── public
	├── README.md
	├── src
	│   ├── App.tsx
	│   ├── assets
	│   ├── components // common components
	│   ├── index.tsx
	│   ├── pages // pages components
	│   ├── react-app-env.d.ts
	│   ├── serviceWorker.ts
	│   ├── setupTests.ts
	├── tsconfig.json // typescript config file
	├── tsconfig.paths.json // paths alias (using `@folder/sub_folder` instead of `../../folder/sub_folder` in `import` statements)  
	└── yarn.lock
</pre>

### Bootstrap

-   Install app dependencies with hitting `yarn` command in your favorite `terminal`.
-   copy `.env.example` to `.env.local` and adjust it and add the tow line `REACT_APP_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'
REACT_APP_WEATHER_API_KEY = 'f825344b0cf0672c689378549f9868db'`.
-   Hit `yarn start` and you `mostly` ready to GO (see #available-scripts section).

## Available Script

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Git workflow

We choose to use a modified version of `feature branch` workflow, so every `feature branch` should be a `child` of `dev` branch (not `main` or `master` branch)

For more information about `feature branch` workflow, see those links: [1](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow), [2](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows), [3](https://bocoup.com/blog/git-workflow-walkthrough-feature-branches).

### Typing convention
-   Use `typescript basic types` as possible as you can (see [this link](https://www.typescriptlang.org/docs/handbook/basic-types.html) for more info).


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Todo

-   Add `router`
-   Add `i18n`
-   Add `new weather card`
-   Add `responsive` view 
## saber mekki
