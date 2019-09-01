# Graze
### Summary
Graze helps you locate the freshest fruits, vegetables and meats at farmer's markets in Los Angeles. This portion of the application is a React front-end for viewing and editing information in the [Graze farmer’s market API](https://github.com/computershawn/graze-app-api). To view the live demo, [click here](https://graze-app.computershawn.now.sh).

![Graze screenshots](/screenshots/graze-screens.jpg "Graze Screenshots")

----

## Tech Stack
Graze uses a number of open source projects to work properly:
* [React](https://reactjs.org.) - javascript library for building user interfaces
* [Enzyme](https://airbnb.io/enzyme/) - javascript testing utility for React
* [Now](https://github.com/zeit/now) - cloud platform for static frontends and serverless functions.

----

## Using the App
Start the app (see below), then open a browser and navigate to http://localhost:3000. At this point, you can click the 'Search' button to search for various farmers market foods. Type 'carrot', for example. The search results area will display a list of vendors, if any, that have sell carrots. Clicking the market name for that vendor will redirect you to the details page for that market.

To handle adminstrative tasks, you'll need to log in. Click the 'Sign In' link on any of the pages, and enter `admin` for the user name. The password for this default account is `unicorns999`. You'll be redirected to the 'Manage Products' page. You can click 'All Products' to view a list of all existing products in all of the markets, with options to update or delete them.

From 'Manage Products', you can also click the 'New Product' link to create a new farmers market item. (Note: This action adds the new product to the app's list of products, but the new product _will not yet_ show up in the list of search results. To show up in search results, the new item should then be added to the _price_list_ table. This front-end client does not currently have form componments to perform this task. However, this functionality will be added in the near future.)

----

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

> Note that by default, this front-end connects directly to the Graze API on Heroku. To connect to your local instance of the [API created by cloning the Graze API repo](https://github.com/computershawn/graze-app-api) instead, you'll need to open `config.js` and change the value of `API_ENDPOINT` to `http://localhost:8000/api`.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
