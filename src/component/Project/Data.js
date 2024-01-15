import Admin from '../../assets/Work/dashboard.jpg';
import Fitnes from '../../assets/Work/Fitness.png';
import Ecommerce from '../../assets/Work/E-commerce.png';
import Resturant from '../../assets/Work/resturent.png';
import Spotify from '../../assets/Work/Spotify2.png';
import ChatApp from '../../assets/Work/ChatApp3.png';


import './Project.css';


const Data = [
    {
        id:1,
        image:Admin,
        title:'Admin Dashboard',
        description:`Build a React Admin Dashboard Application , This Admin Panel includes
         one Dashboard, Three Pages, Four Apps, and Seven fully functional charts!`
    },
    {
        id:2,
        image:Fitnes,
        title:'Fitness Application',
        description:`A Fitnes Application we can using React hooks, modern CSS, 
        framer motion, and many more. `
    },
    
    {
        id:3,
        image:Ecommerce,
        title:'E-Commerce',
        description:`Buliding a E-Commerce Application using React JS ,this application 
        efficient and user-friendly search and filtering system. multiple selection options,
          and price range filters. `
    },
    ,
    {
        id:4,
        image:ChatApp,
        title:'Chat Application',
        description:`Chating App with a Routing, Firebase Social Login, Firebase Google Login, 
        Firebase Facebook Login, React Context API, Chat Engine, REST API's, 
        environment variables, and more!`,
    },
    {
        id:5,
        image: Resturant,
        title:'Resturant',
        description:`Bulid a React Resturant Application , this resturant includes search,Login page,
        Order section , Menu and many more.`
    },
    {
        id:6,
        image:Spotify,
        title:'Spotify Clone',
        description:`Spotify Clone With a modern homepage, fully-fledged music player,
         search, lyrics, song exploration features, search, popular music around you,
          worldwide top charts, and much more.`
    }
]
export default Data;