const url = 'https://thatcopy.pw/catapi/rest/'


async function fetchCatUrl(url) {
    
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

async function changeCats(){
    if(Math.random() > 0.4){
        let myCats = await fetchCatUrl(url);
        document.getElementById("cat-img").src = myCats.url;
        
    }
    else{
        document.getElementById('h1-title').style.fontSize = '18px';
        document.getElementById('h1-title').style.color = 'gold';
        document.getElementById('btn').disable = true;
        document.getElementById('h1-title').textContent = 'Congratz! You clicked so much you found the Holy Catoro. Take a rest under the holy paw';
        document.getElementById("cat-img").src = 'https://i1.sndcdn.com/artworks-000203623260-x71n5u-t500x500.jpg';
        document.getElementById('p-title').textContent = '';
    }
}
