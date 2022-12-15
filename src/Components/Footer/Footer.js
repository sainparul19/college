import "./Footer.css";

const Footer = () => {
const headers = [
    {
        heading:"ABOUT",
        first:"Introduction",
        second:"Principal's Mesage",
        third:"Vice Principals",
        fourth:"Administration",
        fifth:"Non Teaching Staff",
    },
    {
        heading:"COURSES",
        first:"BA",
        second:"MA",
        third:"BFA",
        fourth:"BFD",
        fifth:"BSW",
    },
    {
        heading:"STUDENT CORNER",
        first:"Syllabus",
        second:"Examination",
        third:"Results",
        fourth:"Hostel Admission Guides",
    },
    {
        heading:"ADMISSION",
        first:"Insurance & Anti-Ragging Form",
        second:"B.A (Bachelor of Arts)- Pass",
        third:"Prospectus 2021-22",
    },
];


    return ( 
        <div className="footer">
            {headers.map(({heading,first,second,third,fourth,fifth}) => (
<div className="heads">
    <h2>{heading}</h2>
    <hr></hr>
    <a href="/">{first}</a>
    <a href="/">{second}</a>
    <a href="/">{third}</a>
    <a href="/">{fourth}</a>
    <a href="/">{fifth}</a>
</div>
            ))}
        </div>
     );
}
 
export default Footer;