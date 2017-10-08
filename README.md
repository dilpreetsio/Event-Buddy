# Event Buddy

Lists all major hackathons, Conferences & Start-up Events at one place. This application is Crowd-sourced.

## Is there any event that is missing ?

Add the Hackathons to hacks.json located at `data/hacks.json`
Add the Conferences to hacks.json located at `data/hacks.json`
Add the Start-up events to hacks.json located at `data/hacks.json`

## JSON format

The JSON format of the an event in all JSON files

```
{
  "name"     : "Name of the event",
  "start"    : "dd/mm/yyyy",
  "end"      : "dd/mm/yyyy",
  "location" : "City, Country",
  "website"  : "URL of website",
  "logo"     : "URL of image"
}
```

## How to setup the project?

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
