import React from 'react';
import './Skills.css';
import HTMLimage from '../../utils/Images/technologies/logo-gd84086bce_1920.png';
import CSSimage from '../../utils/Images/technologies/🦆 icon _css 3_.png'
import JSimage from '../../utils/Images/technologies/🦆 icon _javascript_.png'
import TSimage from '../../utils/Images/technologies/🦆 icon _typescript icon_.png'
import reactImage from '../../utils/Images/technologies/🦆 icon _react original wordmark_.png'
import sqlImage from '../../utils/Images/technologies/🦆 icon _mysql original wordmark_.png'
import nodeImage from '../../utils/Images/technologies/🦆 icon _nodejs_.png'
import mongoImage from '../../utils/Images/technologies/🦆 icon _mongodb original wordmark_.png'
import pythonImage from '../../utils/Images/technologies/🦆 icon _python original wordmark_.png'
import javaImage from '../../utils/Images/technologies/🦆 icon _java original wordmark_.png';
import Progress from '../ProgressBar/ProgressBar';

function Skills() {
  const frontEndSkillData = [
    {tech: 'HTML', level: 95, image: HTMLimage},
    {tech: 'CSS', level: 90, image: CSSimage},
    {tech: 'JavaScript', level: 85, image: JSimage},
    {tech: 'TypeScript', level: 85, image: TSimage},
    {tech: 'React', level: 70, image: reactImage},
  ]
  const backEndSkillData = [
    {tech: 'Node.Js', level: 85, image: nodeImage},
    {tech: 'Python', level: 80, image: pythonImage},
    {tech: 'Mongodb', level: 80, image: mongoImage},
    {tech: 'My-SQL', level: 75, image: sqlImage},
    {tech: 'Java', level: 60, image: javaImage},
  ]

  const backEndSkillSet = backEndSkillData.map(skill => (
      <div className="tech__skills__div__each" key={skill.tech} >
      <h2>{skill.tech}</h2>
      <div className="tech__skills__div__each__spans" >
        <img className={`technology__skills__imgs tech__skill__${skill.tech}`}  src={skill.image} alt={skill.tech}/>
        <Progress done={skill.level} />
      </div>
      </div>
    ))

    const frontEndSkillSet = frontEndSkillData.map(skill => (
      <div className="tech__skills__div__each" key={skill.tech} >
      <h2>{skill.tech}</h2>
      <div className="tech__skills__div__each__spans" >
        <img className={`technology__skills__imgs tech__skill__${skill.tech}`} src={skill.image} alt={skill.tech}/>
        <Progress done={skill.level} />
      </div>
      </div>
    ))

  return (
    <div id="skills" className="portfolio__skills__main portfolio__main__div" >
      <div className="portfolio__skills__main__wrapper" >
        <div className="portfolio__skills__wrapper__left" >
          <div className="portfolio__skills__wrapper__left__container" >
            <div className="portfolio__skills__known__heading">
              Skills
            </div>
            {frontEndSkillSet}
          </div>
        </div>
        <div className="portfolio__skills__wrapper__left" >
          <div className="portfolio__skills__wrapper__left__container" >
            {backEndSkillSet}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills