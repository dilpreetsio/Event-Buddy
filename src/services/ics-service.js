import { createEvent } from 'ics-browser'

// Convert a string date DD/MM/YYYY to the array format required by ics-browser
// Date maniuplation from https://stackoverflow.com/questions/563406
function convertDate(date, addDays) {
  const comps = date.split('/').map(d => parseInt(d))
  let dateArray = [comps[2], comps[1], comps[0]]
  if (addDays) {
    const d = new Date(dateArray)
    d.setDate(d.getDate() + addDays)
    dateArray = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
  }
  return dateArray
}

// Create a file in memory and download it
// From https://stackoverflow.com/questions/3665115
function download(filename, data) {
  const blob = new Blob([data], {type: 'text/csv'});
  if(window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    const elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
}

// Create and download an ICS calendar entry from an event
export function downloadICS(event) {
  const icsEvent = createEvent({
    title: event.name,
    start: convertDate(event.start),
    end: convertDate(event.end, 1),
    location: event.location,
    url: event.website
  })
  if (icsEvent.error) throw new Error(icsEvent.error)
  download(event.name + '.ics', icsEvent.value)
}
