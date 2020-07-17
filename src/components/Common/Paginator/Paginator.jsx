import React from 'react';
import s from './Paginator.module.css';

let Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  let pagesUI;
  let curPage = props.currentPage;

  for (var i = curPage - 17; i <= curPage + 17; i++)
    if (i >= 1 && i <= pagesCount)
      pages.push(i);

  pagesUI = pages.map(p => {
    return <span
      key={p}
      onClick={() => { props.onPageChanged(p) }}
      className={s.defaultPage + " " + (curPage === p ? s.currentPage : "")}
    >{p}</span>
  });

  return (<div>
        <span onClick= {() => { props.onPageChanged(1) }} className={s.defaultPage}>{"<<"}</span>
        {pagesUI}
        <span onClick={() => { props.onPageChanged(pagesCount) }} className={s.defaultPage}>{">>"}</span>
      </div>)
}


export default Paginator;