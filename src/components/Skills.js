import React from 'react'
import SkillHTML from '../skillsComponents/SkillHTML'
import SkillCSS from '../skillsComponents/SkillCSS'
import SkillReact from '../skillsComponents/SkillReact'
import SkillJS from '../skillsComponents/SkillJS'
import SkillSass from '../skillsComponents/SkillSass'
import SkillWordpress from '../skillsComponents/SkillWordpress'
import SkillWoo from '../skillsComponents/SkillWoo'
import SkillBootstrap from '../skillsComponents/SkillBootstrap'
import SkillcSharp from '../skillsComponents/SkillcSharp'
import SkillPython from '../skillsComponents/SkillPython'
import SkillJira from '../skillsComponents/SkillJira'
import SkillProject from '../skillsComponents/SkillProject'
import SkillXd from '../skillsComponents/SkillXd'
import SkillUXUI from '../skillsComponents/SkillUXUI'
import SkillExel from '../skillsComponents/SkillExel'
import SkillSQL from '../skillsComponents/SkillSQL'

const Skills = () => {
    return (
        <section className='container'>
            <h3 className='title'>Umiejętności / Technologie</h3>
            <div className="skills-container">
                <SkillHTML/>
                <SkillJS />
                <SkillCSS/>
                <SkillReact/>

                <SkillSass/>
                <SkillWordpress/>
                <SkillWoo/>
                <SkillProject/>

                <SkillJira/>
                <SkillExel/>
                <SkillcSharp/>
                <SkillBootstrap />
                
                <SkillPython/>
                <SkillUXUI/>
                <SkillSQL />
                <SkillXd/>
                
            </div>
           

        </section>
    )
}

export default Skills
