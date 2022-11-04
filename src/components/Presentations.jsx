import React from 'react';
import Presentation from './Presentation';

const Presentations = (props) => {
    return (
        <section id='presentations'>
            <div className='container'>
                <h1>Presentations</h1>
                <p>To encourgae myself to branch out and learn new things I have started speaking at Nebraska Code. I have been doing so for the past 6 years and I look forward to being invited back. To encourage learning I find topics that interest me that I can't use at work and sign up to speak on them. My fear of public speaking drives me to gain a strong comfort level with the material. By the end of it I am able to present and demo the material and answer questions. So as nerve racking as it can be it really helps me become a more versatile developer.</p>
                <div className='presentation-list'>
                    <Presentation presentation={'Fail Even Faster: Utilizing Personas & Paper Prototypes'} organization={'Nebraska.Code()'} year={'2022'}>
                        When I presented "Fail Faster" I didn't have enough time to go into personas and paper prototyping that deep. So with this course I just wanted to focus on the types of personas and how to gather data to make them and use them. I also brought in materials to make the course a little more interactive and allow people to create their own paper prototypes based on personas that they got.
                        <br /><br />
                        <a href='https://docs.google.com/presentation/d/16-QMazWnXYCl0Ksv_Tw-uYSgkbMX8dY4/edit?usp=sharing&ouid=111885317479460705505&rtpof=true&sd=true' target="_blank" rel="noreferrer">Click here</a> to view slide deck
                    </Presentation>
                    <Presentation presentation={'Animation on the web'} organization={'Nebraska.Code()'} year={'2021'}>
                        In this course I went over how to animate elements through several methods. I went over how css animation works and how to be as efficient as possible with animation. I gave basic examples of animation in CSS to show off each of the different methods, I used the GSAP library, I went over Adobe Animate to show how you can create more powerful animations, and I ended the presentation with using Lottie on an existing after effects file to show the audience how easy it was to set up.
                        <br /><br />
                        <a href='https://github.com/shellwe/animation-presentation' target="_blank" rel="noreferrer">Click here</a> to view the Github Repository
                    </Presentation>
                    <Presentation presentation={'Getting Started With Headless WordPress'} organization={'Nebraska.Code()'} year={'2019'}>
                        Headless CMS systems were just taking off at this time and it offered so much freedom for developers that they didn't have before. For the first time (outside of using cumbersome plugins) the developer could build out custom views and even utilize plugins like Advanced Custom Fields to package the data how they wish and then build their own front end with whatever tools they wish and just requeest the data they need as they need it as JSON objects via REST. I also went over headless Drupal as well.
                        <br /><br />
                        <a href='https://docs.google.com/presentation/d/16-QMazWnXYCl0Ksv_Tw-uYSgkbMX8dY4/edit?usp=sharing&ouid=111885317479460705505&rtpof=true&sd=true' target="_blank" rel="noreferrer">Click here</a> to view slide deck
                    </Presentation>
                    <Presentation presentation={'Headless Drupal'} organization={'UNL Developers Forum'} year={'2019'}>
                        With the University of Nebraska&ndash;Lincoln using Drupal I thought that this would be a good topic to go over. The intero was similar to the Headless WordPress presentation as the concepts are fairly universal. In this talk I presented how easy it was to set up Headless Drupal and I provided the information on how we could move in that direction at UNL; citing examplese of how it would help our departments. After the presentation I answered quesetions from the fellow UNL staff members on the benefits of headless Drupal.
                        <br /><br />
                        <a href='https://docs.google.com/presentation/d/16-QMazWnXYCl0Ksv_Tw-uYSgkbMX8dY4/edit?usp=sharing&ouid=111885317479460705505&rtpof=true&sd=true' target="_blank" rel="noreferrer">Click here</a> to view slide deck
                    </Presentation>
                    <Presentation presentation={'Getting Good with Grid'} organization={'Nebraska.Code()'} year={'2018'}>
                        I gave this presentation as CSS Grid was just starting in popularity. I went over the basic concepts of Grid and showed the audience various instances where Grid could achieve something better than Flexbox or other CSS layout styles can and helped people wrap their mind around 2 directional layouts.
                    </Presentation>
                    <Presentation presentation={'Fail Faster: Utilizing UX To Save You Headaches Later'} organization={'Nebraska.Code()'} year={'2017'}>
                        In this session I discused the importance of failing faster in the planning stages. I went over User Centered Design. Some topics I discussed were mock ups, personas, analysis, user testing, prototypes and several other UX techniques.
                        <br /><br />
                        <a href='https://docs.google.com/presentation/d/15xjDENYkCShZiHgnb9COpmmsfmfS6pTo/edit?usp=sharing&ouid=111885317479460705505&rtpof=true&sd=true' target="_blank" rel="noreferrer">Click here</a> to view slide deck
                    </Presentation>
                </div>
            </div>
        </section>
    )
}

export default Presentations;