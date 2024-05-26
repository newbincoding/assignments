function Time(){
    console. clear()
    const currentDate = new Date();
    let h = currentDate.getHours();
    let m = currentDate.getMinutes();
    let s = currentDate.getSeconds();
    console.log(h, ":", m, ":", s)
}

setInterval(Time, 1000)