import Me from '../../img/me.png';

function About(){
    return(
        <div className="About">
            <div className='intro'>
            <img src={Me} alt="self portrait" className="me"/>
            <div><div>Hey! I'm Meesh </div>
           I'm a new media student in Vancouver
    enthusiastic to learn and experience 
       more in development and/or film.

                <div>Here are some things I can do!</div></div>
                </div>
            <div className='skill-list'>
                <div className='skill-ul'>
                <ul>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React.js</li>
                    <li>React Native</li>
                </ul>
            </div>
            <div className='skill-ul'>
                <ul>
                    <li>UI/UX Design</li>
                    <li>UI/UX Research</li>
                </ul>
            </div>
            <div className='skill-ul'>
                <ul>
                    <li>Adobe Creative Suite (XD, Photoshop, Illustrator, etc.)</li>
                    <li>Final Cut Pro X</li>
                    <li>Figma</li>
                    <li>Web development</li>
                    <li>A+ cat mom</li>
                </ul>
            </div>
            </div>
        </div>

    )
}

export default About;