'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pikeStore = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  custPerHour: [],
  cookiesPerHour: [],
  totalSales: 0,
  custPerHourFunc:
