let i=0
let cardContainer=document.getElementById('demo')
fetch('https://gnews.io/api/v4/top-headlines?&token=490ebf489824552a75004e061875b640&country=in&lang=en')
.then(response => response.json())
.then(data =>{
    for(i=0;i<10;i++){
    var card=document.createElement('div')
    var news_title=data['articles'][i]['title']
    var news_desc=data['articles'][i]['description']
    var news_url=data['articles'][i]['url']
    var img_url=data['articles'][i]['image']
    var source_name=data['articles'][i]['source']['name']
    console.log(news_url)
    console.log(img_url)
    card.innerHTML=`<div class="card">
    <div class="img-container"><img src="${img_url}"></div>
    <div class="text-container">
        <h2>${news_title}</h2>
        <h4>${news_desc}</h4>
        <h3><a href="${news_url}" target=_blank>Read more on ${source_name}</a></h3>
    </div>
</div>`
        cardContainer.appendChild(card)
    }
})