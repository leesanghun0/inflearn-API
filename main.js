//api 부르는 함수만들기
let news = [];
const getLatestNews = async() =>{
    let url = new URL('https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=10');

    let header = new Headers({"x-api-key":"Ss8rJd1VUQmhqm2SOQmJGn6fVXtmels-kqlF9lw2xos",
});

    let response = await fetch(url,{headers:header});//데이터를 보내는 방식 ajax, http, fetch
    let data = await response.json() //json 서버통신에서 많이 쓰이는 자료형타입 json객체랑 똑같은데 텍스트타입, 객체처럼 사용할수 있음.
    console.log("this is data",data);
    news = data.articles
    console.log(news) 
};
getLatestNews();
