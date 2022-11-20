//api 부르는 함수만들기
const getLatestNew = () =>{
    let url = new URL('https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=10');

    let header = new Headers({'x-api=key':'Ss8rJd1VUQmhqm2SOQmJGn6fVXtmels-kqlF9lw2xos'});

    let response = fetch(url,{headers:header})
}
getLatestNew()