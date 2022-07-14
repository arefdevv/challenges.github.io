const mainDiv = document.querySelector('.main-div');


async function getApi(){
    const dataFetch = await fetch("https://petstore.swagger.io/v2/pet/findByStatus?status=available", {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    }
    );
    const data = await dataFetch.json();
    

    console.log(data)

    const counter = document.createElement('p');
    counter.innerHTML = ` There are ${data.length} number of pets`;

    mainDiv.appendChild(counter);
}

getApi();

