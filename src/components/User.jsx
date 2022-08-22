import "./User.css"
<link href="https://fonts.googleapis.com/css2?family=Aboreto&display=swap" rel="stylesheet"></link>

export default function User({id,login,avatar_url}){
    return <div className="user-container">
        <button className="btn">X</button>
        <img src={avatar_url} alt="image" className="img"/>
        <p className="user-style">{login}</p>
        <span className="user-style">ID: {id}</span>
    </div>
}