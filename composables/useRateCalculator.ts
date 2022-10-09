export interface Rates {
  id: number
  name: string
  perKm: number
  perHour: number
  minimumHoursHourly: number
  minimumRateHourly: number
  minimumDistance: number
  minimumRateDistance: number
}

export interface Surcharges {
  fuelSurcharge: number
  gratuity: number
  HST: number
}

//Function that takes the Rates array of rate objects and returns the
// correct rate object by the id passed in from the selected vehicle
const getRateFromId = (id: number, rates: Rates[]) =>
  rates.find((rate) => rate.id === id)

//Function that takes the rate object checks to see if the pricing is hourly
// based or is distance based then calculates the base rate
const getBaseRate = (
  isHourly: boolean,
  numHours: number,
  numKms: number,
  rate: Rates
): number =>
  isHourly
    ? numHours < rate.minimumHoursHourly
      ? rate.minimumRateHourly
      : round(rate.perHour * numHours)
    : numKms < rate.minimumDistance
    ? rate.minimumRateDistance
    : round(
        rate.minimumRateDistance + (numKms - rate.minimumDistance) * rate.perKm
      )

//Function that takes the surcharge object, destructures it and calculates the surcharges individually
const getSurchargeAmounts = (baseRate: number, surcharges: Surcharges) => ({
  fuelSurcharge: round(baseRate * surcharges.fuelSurcharge),
  gratuity: round(baseRate * surcharges.gratuity),
  HST: round(baseRate * surcharges.HST),
})

//custom rounding function for rounding to the nearest cent with high precision
const round = (num: number) => {
  const m = Number((Math.abs(num) * 100).toPrecision(15))
  return (Math.round(m) / 100) * Math.sign(num)
}

export { getRateFromId, getBaseRate, getSurchargeAmounts, round }
