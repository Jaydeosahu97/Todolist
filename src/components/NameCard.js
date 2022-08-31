export default function NameCard(props){
    /*This method is performing the operation of lifting the state up. 
    This method will tell parent to delete the respective value from the list
    */
    function handleClick(){
        props.doDelete(props.index);
    }
    return(
        <>
        <div className="display-card">
            <span>{props.index+1}</span> {props.name}
            <button className="btn btn-primary" onClick={()=>handleClick()}>Delete</button>
            <hr/>
        </div>
        </> 
    )
}