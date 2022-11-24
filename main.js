//api 부르는 함수만들기
let news = [];

let menus = document.querySelectorAll(".menus button")
//console.log("menus",menus)

menus.forEach((menus)=>menus.addEventListener("click",(event)=>getNewsByTopic(event)))

const getLatestNews = async() =>{
    let url = new URL('https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=10');

    let header = new Headers({"x-api-key":"Ss8rJd1VUQmhqm2SOQmJGn6fVXtmels-kqlF9lw2xos",
});

    let response = await fetch(url,{headers:header});//데이터를 보내는 방식 ajax, http, fetch
    let data = await response.json() //json 서버통신에서 많이 쓰이는 자료형타입 json객체랑 똑같은데 텍스트타입, 객체처럼 사용할수 있음.
    console.log("this is data",data);
    news = data.articles
    console.log(news);



    render()
};

const getNewsByTopic = (event) => {
    console.log("클릭됨",event.target.textContent);
    let topic = event.target.textContent.toLowerCase();
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${topic}&page_size=10`);
    console.log(url)
}

const render = ()=>{
    let newsHTML =''

    newsHTML = news.map((item)=>{
        return `<div class="row news">
        <div class="col-lg-4">
            <img class="news-img-size" src="${
                item.media ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"
}" />
                 
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>
            ${item.summary == null || item.summary =='' ? "내용없음"
            : item.summary.length > 200
            ? item.summary.substring(0,200) + "..."
            : item.summary}
            </p>
            <div>
            ${news.rights || "no source"}  ${moment(
                news.published_date
             ).fromNow()}</div>
        </div>
    </div>`;
    }).join('') //array를 string으로 변환

    console.log(newsHTML)


    document.getElementById("news-board").innerHTML = newsHTML;
}
getLatestNews();
