import "./About.css";

const About = () => {
const posts = [
    {image:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-89700,resizemode-1,msid-39893174/news/politics-and-nation/kamla-beniwal-denies-wrongdoing-insists-she-abided-by-law.jpg",
        name:"PROF. MUKTA AGRAWAL",
        post:"Pricipal",
    },
    {
        image:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-89700,resizemode-1,msid-39893174/news/politics-and-nation/kamla-beniwal-denies-wrongdoing-insists-she-abided-by-law.jpg",
        name:"SHRI KALRAJ MISHRA",
        post:"Chancellor",
    },
    {
        image:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-89700,resizemode-1,msid-39893174/news/politics-and-nation/kamla-beniwal-denies-wrongdoing-insists-she-abided-by-law.jpg",
        name:"PROF. RAJEEV JAIN",
        post:"Vice-Chancellor",
    },
];

    return ( 
        <div className="abt">
            <div className="faculty">
            {posts.map(({post,image,name}) => (
                <div className="ppl">
                    <img src={image}  className="imaage" alt="" />
                    <h2>{name}</h2>
                    <p>{post}</p>
                </div>
            ))}
            </div>
            <div className="abt-us">
                <p>College of Art, New Delhi, established in 1942 under the arts department of the Delhi College of Engineering now the Delhi Technological University (DTU), is an art college for advanced training in Visual Art. It is run by the Government of NCT Delhi. It is situated on Tilak Marg, New Delhi.In 2021, the Government of NCT Delhi has de-affiliated the college from Delhi University and merged it with Ambedkar University Delhi. The college offers courses both at graduate and post-graduate levels; It offers courses in most mediums of Visual Art, both Creative and Applied Art. This includes Master of Fine Art (MFA, a post graduation course of two year in duration) in Applied Art, Printmaking, Sculpture, Visual Communication and Bachelor of Fine Art (BFA, an undergraduate course with 4 years duration) in Applied Art, Art History, Printmaking, Sculpture, Visual Communication.</p>
            </div>
        </div>
     );
}
 
export default About;