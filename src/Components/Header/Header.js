import "./Header.css";


const Header = () => {
    return (  
        <>
        <div className="header">
            <div className="logo">
                <img src="https://cdn.worldvectorlogo.com/logos/arts-colleges.svg" className="pic"  alt="" />
            </div>
            <h1>ARTS COLLEGE</h1>
            <div className="ab">
                <a className="enrl" href="/">ENROLL NOW</a>
            </div>
        </div>
        </>
    );
}
 
export default Header;