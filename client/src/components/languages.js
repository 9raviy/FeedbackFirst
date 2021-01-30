import React from 'react'
import nodeLogo from '../images/logos/node.png'
import reactLogo from '../images/logos/reactjs.png'
import javascriptLogo from '../images/logos/javascript.png'
import html5Logo from '../images/logos/html5.png'
import reduxLogo from '../images/logos/redux.png'
import mongoDBLogo from '../images/logos/mongoDB.png'
import css3Logo from '../images/logos/css5.png'

const technologyData=[
    {
        technologyName:"HTML5",
        imageUrl:html5Logo,
        altName:"HTML5"
    },
    {
        technologyName:"CSS3",
        imageUrl:css3Logo,
        altName:"CSS3"
    },
    {
        technologyName:"Javascript",
        imageUrl:javascriptLogo,
        altName:"Javascript"
    },
    {
        technologyName:"React.js",
        imageUrl:reactLogo,
        altName:"React.js"
    },
    {
        technologyName:"Redux",
        imageUrl:reduxLogo,
        altName:"Redux"
    },
    {
        technologyName:"Node.js",
        imageUrl:nodeLogo,
        altName:"Node.js"
    },
    {
        technologyName:"MongoDB",
        imageUrl:mongoDBLogo,
        altName:"mongoDB"
    }
]

export default function languages() {
    return (
        <div>
            <section className="languages">
                <h2 className="md text-center my-2">
                    Technologies used in building FeedbackFirst
                </h2>
                <div className="container flex">
                    {technologyData.map((tech,index)=>(
                        <div className="card">
                            <h4>{tech.technologyName}</h4>
                            <img src={tech.imageUrl} alt={tech.altName}/>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
