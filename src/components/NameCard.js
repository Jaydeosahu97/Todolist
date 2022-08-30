export default function NameCard(props){

    function handleClick(){
        props.doDelete(props.index);
    }
    return(
        <>
        <div className="display-card">
            <span>{props.index+1}</span> {props.name}
            <button className="btn btn-primary" onClick={()=>handleClick()}>Delete</button>
            <i className="bi bi-trash"></i>
        </div>
        </> 
    )
}