import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/userIcon.png';

class Users extends React.Component{

  constructor(props){
    super(props);
    this.setUsers = this.setUsers.bind(this);
  }

  componentDidMount(){
    this.setUsers(this.props.currentPage);
  }  

  setUsers(page){
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize }`,{
      withCredentials: true
    }).then(response =>{
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount)
    });
  }

  onPageChanged(p){
    this.props.setCurrentPage(p);
    this.setUsers(p);
  }
  
  render(){
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];

    let pagesUI;
    let curPage = this.props.currentPage;

    for (var i = curPage-5; i<=curPage+5;i++)
      if (i>=1 && i <= pagesCount)
        pages.push(i);

    pagesUI = pages.map(p => {return <span 
      onClick={()=>{this.onPageChanged(p)}}          
      className={s.defaultPage + " " +(curPage===p?s.currentPage:"")}
    >{p}</span>})

  return (
<div className={s.content}>
  <div>
    <span onClick={()=>{ this.onPageChanged(1)}} className={s.defaultPage}>{"<<"}</span>
    {pagesUI}
    <span onClick={()=>{this.onPageChanged(pagesCount)} }className={s.defaultPage}>{">>"}</span>
  </div>
  {
    this.props.users.map(u => {return <div key={u.id}>
      <span>
        <div>
          <img className={s.avatar} src={u.photos.small != null?u.photos.small:userPhoto} alt="avatar"/>
        </div>
        <div>
          {
            u.followed
              ?<button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button>
              :<button onClick={()=>{this.props.follow(u.id)}}>Follow</button>
          }          
        </div>
      </span>
      <span>
        <span>
          <div>{u.name}</div>
          <div>{u.status}</div>
        </span>
        <span>
          <div>{"u.location.country"}</div>
          <div>{"u.location.city"}</div>
        </span>
      </span>
    </div>})
  
  }

</div>)
  }
}

export default Users ;