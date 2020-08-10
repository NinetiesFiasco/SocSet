import React from 'react'
import s from './Paginator.module.css'

type PropsType = {
  totalUsersCount:number
  pageSize:number
  currentPage:number
  onPageChanged: (page:number)=>void
}

let Paginator: React.FC<PropsType> = ({totalUsersCount,pageSize,currentPage,onPageChanged}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  let pagesUI;
  let curPage = currentPage;

  for (var i = curPage - 17; i <= curPage + 17; i++)
    if (i >= 1 && i <= pagesCount)
      pages.push(i);

  pagesUI = pages.map(p => {
    return <span
      key={p}
      onClick={() => { onPageChanged(p) }}
      className={s.defaultPage + " " + (curPage === p ? s.currentPage : "")}
    >{p}</span>
  });

  return (<div>
        <span onClick= {() => { onPageChanged(1) }} className={s.defaultPage}>{"<<"}</span>
        {pagesUI}
        <span onClick={() => { onPageChanged(pagesCount) }} className={s.defaultPage}>{">>"}</span>
      </div>)
}


export default Paginator;