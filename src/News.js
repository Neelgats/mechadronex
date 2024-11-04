import React from "react";
import './News.css';

const newsData=[
    {date:'01-02-2023',content:'starting point of our club'},
    {date:'01-02-2023',content:'starting point of our club'},
    {date:'01-02-2023',content:'starting point of our club'},
    {date:'01-02-2023',content:'starting point of our club'},
];

const News=()=>{
    return(
        <section id="news" className="news-section">
            <h2>Latest News</h2>
            <ul className="news-list">
                {newsData.map((news,index)=>(
                    <li key={index} className="news-item">
                        <span className="news-date">{news.date}</span>
                        <p className="news-content">{news.content}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default News;