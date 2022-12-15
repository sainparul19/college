import "./Act.css";

const Act = () => {
    const field = [
        {
            type:"Placements",
        },
        {
            type:"Results",
        },
        {
            type:"Events",
        },
        {
            type:"Reports",
        },
    ];
    return (  
        <div className="act">
            {field.map(({type}) => (
                <div className="fields">
                    <a href="/">{type}</a>
                </div>
            ))}
        </div>
    );
}
 
export default Act;