// Define constants for shipping costs and warning messages
const RSA_SHIPPING = 400
const NAM_SHIPPING = 600
const OTHER_SHIPPING = 800
const FREE_SHIPPING_THRESHOLD = 1000
const FREE_SHIPPING_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'

// Define variables for items and customers
const shoes = 300
const toys = 100
const shirts = 150
const batteries = 35
const pens = 5
const customers = 1

// Define variables for location and currency
const location = 'RSA'
let currency = 'R'

// Calculate the cost of the items
const itemCost = shoes + toys * 5 + shirts * 0 + batteries * 2 + pens * 0

// Determine the shipping cost based on location
let shipping = null
if (location === 'RSA') {
  shipping = RSA_SHIPPING
} else if (location === 'NAM') {
  shipping = NAM_SHIPPING
} else if (location === 'NK') {
  console.log(BANNED_WARNING)
} else {
  shipping = OTHER_SHIPPING
}

// Check if free shipping applies based on cost and location
if (itemCost >= FREE_SHIPPING_THRESHOLD && customers === 1) {
  if (location === 'RSA' || location === 'NAM') {
    shipping = 0
  }
} else if (shipping !== null && customers !== 1) {
  console.log(FREE_SHIPPING_WARNING)
}

// Calculate the total cost and log to the console
if (location !== 'NK') {
  const totalCost = itemCost + shipping
  console.log(`Price: ${currency}${totalCost}`)
}
