const CURRRENCY_FORMATER = new Intl.NumberFormat(undefined, {

    currency:'USD',
    style:'currency'
})

const formatCurrency = (number)=>{
    return CURRRENCY_FORMATER.format(number);
}

export default formatCurrency;