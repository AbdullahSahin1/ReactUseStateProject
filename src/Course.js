import Angular from './images/angularjs.jpg'
import bootstrap from './images/bootstrap.png'
import css from './images/css.webp'
import html from './images/html.jpg'
import javascript from './images/javascript.webp'
import node from './images/nodejs.png'
import react from './images/react.jpg'
import vue from './images/vue.jpeg'

const courseMap =  {
    Angular,
    bootstrap,
    css,
    html,
    javascript,
    node,
    react,
    vue,
}

function Course({courseName}) {
    console.log(courseMap[courseName])
    // console.log(courseName)
    return ( 
        <div>
            <img src={courseMap[courseName]}alt="course" />
        </div> 
    );
}

export default Course;