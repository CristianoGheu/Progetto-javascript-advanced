const newsList = document.getElementById('news-list');
const button = document.getElementById('button');
        let startIndex = 0; 

        async function fetchNews() {
            try {
                const response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json');
                const data = await response.json();
                const newsIds = data.slice(startIndex, startIndex + 10);

                for (const newsId of newsIds) {
                    const newsResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`);
                    const newsData = await newsResponse.json();


                    const newsItem = document.createElement('div');
                    newsItem.innerHTML = `
                        <h3 class='newsTitle'>${newsData.title}</h3>
                        <p class='data'>Date: ${new Date(newsData.time * 1000).toLocaleString()}</p>
                        <p><a class='link' href="${newsData.url}" target="_blank">Read More</a></p>
                    `;
                    newsList.appendChild(newsItem);
                }

                startIndex += 10;
            } catch (error) {
                console.error(error);
            }
        }
       if(button){
        button.addEventListener('click', fetchNews);
       }

        fetchNews();