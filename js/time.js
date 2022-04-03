function format(millisecond) {
    let date = new Date(millisecond)
    let year = date.getFullYear()
    let month =String( date.getMonth() + 1 ).padStart(2,0);
    let day = date.getDate()

    return `${day}.${month}.${year}`
}





