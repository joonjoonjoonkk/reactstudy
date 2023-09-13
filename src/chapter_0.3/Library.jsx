import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div>
            <Book name='책1번' numOfPage = {300}/>
            <Book name='책2번' numOfPage = {400}/>
            <Book name='책3번' numOfPage = {500}/>
        </div>
    )
}

export default  Library;
/* 변경점 찾기 */