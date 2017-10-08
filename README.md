# Event Buddy

Lists all major Hackathons, Conferences & Start-up Events at one place. The purpose of this app is to provide information to every enthusiast. Contribute by sharing events around you to help others.

## Is there any event that is missing ?

Add the Hackathons to hacks.json located at `data/hacks.json`
Add the Conferences to conferences.json located at `data/conferences.json`
Add the Start-up events to start-up.json located at `data/start-up.json`

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

# serve at localhost:8080
npm run dev
```

## Maintainer

This project is maintainer by [geekyd](https://github.com/geekyd)
