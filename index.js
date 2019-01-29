const logname = el => console.log(el.name);

function logDriverNames(array) {
  array.forEach(logname)
}

// function logDriversByHometown(array, hometown) {
//   return array.forEach( driver => {
//     if( driver.hometown === hometown ) {
//       console.log(driver.name)
//     }
//   })
// }

const matchHometown = (el, hometown) => {
  if (el.hometown === hometown) {
    console.log(el.name);
  }
}

function logDriversByHometown(array, hometown) {
  return array.forEach((el) => matchHometown(el, hometown));
}

function driversByRevenue(array) {
  return array.slice().sort( (driver1, driver2) => {
    // console.warn(driver1, driver2)
    return driver1.revenue - driver2.revenue
  })
}

const driversByName = array => {
  return array.slice().sort( (driver1, driver2) => {
    return driver1.name.localeCompare(driver2.name);
  })
}

const revenue = function (agg, el, i, arr) {
  agg += el.revenue
  // console.warn(agg)
  return agg
}

const totalRevenue = array => {
  return array.reduce(revenue, 0)
}

const averageRevenue = array => {
  return totalRevenue(array)/array.length
}
