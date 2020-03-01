import React, {useState} from "react";
import s from "./users.module.css";

const Pagination = ({portionSize = 10, ...props}) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return (<div>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>prev</button>}
        <div>
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return <span onClick={() => {
                            props.setNewCurrentPage(p)
                        }}
                                     key={p}
                                     className={props.currentPage === p ? `${s.selectedPage}` : ''}>
                            {p}
                        </span>
                    })
            }
        </div>
        {portionNumber < portionCount && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>next</button>}
    </div>)
};

export default Pagination