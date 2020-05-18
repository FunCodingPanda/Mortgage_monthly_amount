const monthly_payments = (loan, annual_interest, year) => {
  let monthly_interest = (annual_interest/12)/100
  let number_payments = year*12
  return loan*(monthly_interest*((1+monthly_interest)**number_payments))/(((1+monthly_interest)**number_payments)-1)
}

console.log(monthly_payments(100000, 2.8, 30))
