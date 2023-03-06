let beat = document.getElementById("beat")
const setButton = document.querySelector("#set")
const stop = document.querySelector("#stop")


a = ["HOURS"]
b = ["MINUTES"]
c = ["SECONDS"]

for (let i = 0;i<=12;i++){
    a.push(i)
}

for (let i = 0;i<=60;i++){
    b.push(i)
    c.push(i)
}
const hour_selector = document.querySelector("#drop1");
const minute_selector = document.querySelector("#drop2")
const seconds_selector = document.querySelector("#drop3")
// const drop1 = document.querySelector()

a.forEach(
    (element) => {
        let opt1 = document.createElement("Option");
        opt1.setAttribute('id',element);
        opt1.setAttribute('value',element)
        opt1.innerText = element;
        hour_selector.appendChild(opt1)
        // console.log(opt)
    }
);

b.forEach(
    (element) => {
        let opt2 = document.createElement("Option");
        opt2.setAttribute('id',element);
        opt2.setAttribute('value',element)
        opt2.innerText = element;
        minute_selector.appendChild(opt2)
        // console.log(opt)
    }
);

c.forEach(
    (element) => {
        let opt3 = document.createElement("Option");
        opt3.setAttribute('id',element);
        opt3.setAttribute('value',element)
        opt3.innerText = element;
        seconds_selector.appendChild(opt3)
        // console.log(opt)
    }
);

// console.log(hour_selector.value);


function timeMs(){
    timez = 1000 * parseInt(seconds_selector.value) + 60,000 * parseInt(minute_selector.value) + 3,600,000 * parseInt(hour_selector.value);
    // timez = 0;
    return timez;
}


setButton.addEventListener(
    'click',() => {
        setTimeout(() => {
            beat.play()
        }, timeMs());
        console.log(timeMs())
    },
);


stop.addEventListener(
    "click",() => {
        beat.pause()
        beat.currentTime = 0;
    }
)
// audio.play()

