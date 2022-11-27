//api 부르는 함수만들기
let news = [];

let menus = document.querySelectorAll(".menus button")
//console.log("menus",menus)

menus.forEach((menu)=> menu.addEventListener("click",(event)=>getNewsByTopic(event)))

const getLatestNews = async() =>{
    let url = new URL('https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=2');

    let header = new Headers({"x-api-key":"47N5bByTjVrJ2wz808kcfs5-5BBbBXyBIdzBU_poheo",
});

    let response = await fetch(url,{headers: header});//데이터를 보내는 방식 ajax, http, fetch
    let data = await response.json() //json 서버통신에서 많이 쓰이는 자료형타입 json객체랑 똑같은데 텍스트타입, 객체처럼 사용할수 있음.
    news = data.articles;
    console.log(news);

    render()
};

const getNewsByTopic = async(event) => {
    console.log("클릭됨",event.target.textContent);
    let topic = event.target.textContent.toLowerCase();
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines/countries=KR&page_size=10&topic=${topic}`)
    let header = new Headers({"x-api-key":"Ss8rJd1VUQmhqm2SOQmJGn6fVXtmels-kqlF9lw2xos",
    });
    let response = await fetch(url, {headers:header});
    let data = await response.json(); 

    console.log("토픽뉴스데이,터",data)
};

const render = ()=>{
    let newsHTML =''
    newsHTML = news.map((news)=>{
        return `<div class="row news">
        <div class="col-lg-4">
        <img class="news-img"
        src="${
            news.media ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"
}" />                      
        </div>
        <div class="col-lg-8">
            <h2>${news.title}</h2>
            <p>
            ${
                news.summary == null || news.summary == ""
                  ? "내용없음"
                  : news.summary.length > 200
                  ? news.summary.substring(0, 200) + "..."
                  : news.summary
           }
            </p>
            <div>
            ${news.rights || "no source"}${moment(news.published_date).fromNow()}
            </div>
        </div>
    </div>`
    }).join('');


    document.getElementById("news-board").innerHTML = newsHTML;
}
getLatestNews();
