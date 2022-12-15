import "./Info.css";

const Info = () => {
const departt = [
    {dept:"Home"},
    {dept:"About Us"},
    {dept:"Courses"},
    {dept:"Admission 2022-2023"},
    {dept:"Faculty"},
    {dept:"Contact Us"},
];

    return ( 
        <div className="inn">
            {departt.map(({dept}) => (
                <div className="sin">
                    <a href="/">{dept}</a>
                </div>
            ))}
        </div>
     );
}
 
export default Info;