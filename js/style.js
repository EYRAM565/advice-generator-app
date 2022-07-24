document.querySelector('#dice').addEventListener('click', ()=> {
    console.log('testing');
    fetch('	https://api.adviceslip.com/advice')
     .then(res => res.json())
     .then(data => {
        const slip = data.slip
        document.querySelector('#header').innerText =  ` ${"ADVICE #"}` + slip.id;
        document.querySelector('p').innerText = `${slip.advice}`;
        console.log(data);
    })
    .catch(err => {
        console.log(`error $ {error}`);
    })
})