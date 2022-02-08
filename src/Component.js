


function Component(props) {

   const refreshPage = ()=>{
      window.location.reload();
   }
   
return(
    
    <>
      <div className="component_wrapper">
<div className="inner_1">
<img src={props.username?.picture?.large} />
   <div className="inner_2">
   <p className="name">{props.username?.name?.first } {props.username?.name?.last}</p>
    <p className="email">Email: {props.username?.email}</p>
    <p className="place">{props.username?.location?.country}  {props.username?.location?.city}</p>
   </div>
</div>

</div>



<button onClick={refreshPage}>Refresh</button>
    </>
)
}
export default Component


/*

<div className="component_wrapper">
<div className="inner_1">

   <div className="inner_2">
   <p className="name">{props.username?.name } {props.username?.name.last}</p>
    <p className="email">Email: {props.username?.email}</p>
    <p className="place">{props.username?.location?.country}  {props.username?.location?.city}</p>
   </div>
</div>

</div>





   let name = `${username.name.first} ${username.name.last}`;
    let email = username.email;
    let image = username.picture.large;
   let homeTown = `${username.location?.country}/${username.location?.city}`


*/