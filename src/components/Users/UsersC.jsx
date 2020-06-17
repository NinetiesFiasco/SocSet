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
    this.setUsers();
  }  

  setUsers(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize }`).then(response =>{
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount)
    });
  }

  onPageChanged(p){
    this.props.setCurrentPage(p);
    this.setUsers();
  }
  
  render(){  
    debugger;
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (var i=1;i<=pagesCount;i++)
      pages.push(i);

  return (
<div className={s.content}>
  <div>
    {
      pages.map(p => {return <span 
        onClick={()=>{this.onPageChanged(p)}}          
        className={s.defaultPage + " " +(this.props.currentPage===p?s.currentPage:"")}
      >{p}</span>})
    }
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