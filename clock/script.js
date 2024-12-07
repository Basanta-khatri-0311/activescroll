let clock = document.querySelector('#clock')

setInterval(()=>{
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString({ hour12: true });
},1000);