import React from "react";
import Site from "./Site";
import Product from "./Product";

const Sites = (props) => {
  return (
    <>
      <Site
        title={"CoCreate - University of Nebrsaka–Lincoln"}
        shortTItle={'CoCreate'}
        phone={"iphone-left-cocreate"}
        mac={"imac-right-cocreate"}
        description={"CoCreate was an interesting challenge because we needed to create a magazine that was styling and appealing enough to interest students, fit the University's needs, and be versatile enough to permit expanding features \n\n This site was previously handcoded so any and all changes/additions had to be done with a web developer. We wanted to change that to allow anyone to be able to make changes. We developed the templates for each of the pages manually and then we used Drupal structures to craft the different pages. \n\n The challenges with this is we choose to work with another department - University Communications. We had to communicate wheh each of us are making changes and set up a GIT repository to manage the SCSS changes between us. We collaborated to collect ideas on how to best future proof the site. \n\n The final product became a very appealing magazine that is easy to add new articles and anyone with permissions could easily make changes."}
      >
        <p><strong>Client:</strong> University of Nebraska–Lincoln</p>
        <p><strong>Site:</strong> <a href="https://cocreate.unl.edu/" target="_blank" rel="noreferrer">https://cocreate.unl.edu/</a></p>
        <strong>Technologies used:</strong><span className="products">
          <Product logoFile={'sass-icon'} logoText={'SASS'}></Product>
          <Product logoFile={'javascript-programming-language-icon'} logoText={'JavaScript'}></Product>
          <Product logoFile={'jquery-icon'} logoText={'Jquery'}></Product>
          <Product logoFile={'drupal-icon'} logoText={'Drupal'}></Product>
          </span>
          <br />
          <br />
        <strong>Programs used:</strong><span className="products">
          <Product logoFile={'adobe-illustrator-icon'} logoText={'Adobe Illustrator'}></Product>
          <Product logoFile={'adobe-photoshop-icon'} logoText={'Adobe Photoshop'}></Product>
          <Product logoFile={'adobe-xd-icon'} logoText={'Adobe XD'}></Product>
          </span>
        <p><strong>Audience:</strong> CoCreate is a student magazine that focuses on the
          achievements of noteworthy students At the University fo Nebraska. It is
          designed to make the stuent the hero of their own story and show how you
          can have your own story at the University of Nebraska. There is a request for
          more info on each page.</p>
      </Site>
      <Site
        title={"Why Nebraska - University of Nebrsaka–Lincoln"}
        shortTItle={'WhyNebraska'}
        phone={"iphone-right-whyneb"}
        mac={"macbook-left-whyneb"}
        description={'I really enjoyed working on this site because it presented me with a great deal of challenges to overcome. With the "Why Nebraska" main page I was able to really take advantage of CSS Grid by making more complicated layouts that layer on top of each other. I also was allowed to explore using animation but not letting it affect accessibility. \n\n With the Career, Social, and Academic pages I was challenged with making a two column layout where just the left side scrolls and the right side rotates out pictures and descriptions as the user scrolls to different sections. The layout also presented a challenge by switching from two columns down to one becauu we needed as any as 4 media queries depending on the complexity \n\n From this Site I learned the importance breaking down complex Sites to managable and testable segments. I learned to work with talented designers to combine their expertise in design and my expertise in web and UX principles to build a quality website'}
      >
        <p><strong>Client:</strong> University of Nebraska–Lincoln</p>
        <p><strong>Site:</strong> <a href="https://admissions.unl.edu/why-nebraska/" target="_blank" rel="noreferrer">https://admissions.unl.edu/why-nebraska/</a></p>
        <strong>Technologies used:</strong><span className="products">
        <Product logoFile={'sass-icon'} logoText={'SASS'}></Product>
        <Product logoFile={'javascript-programming-language-icon'} logoText={'JavaScript'}></Product>
        <Product logoFile={'jquery-icon'} logoText={'Jquery'}></Product>
        <Product logoFile={'dotnet-icon'} logoText={'.NET'}></Product>
        </span>
        <br />
        <br />
        <strong>Programs used:</strong><span className="products">
          <Product logoFile={'adobe-illustrator-icon'} logoText={'Adobe Illustrator'}></Product>
          <Product logoFile={'adobe-photoshop-icon'} logoText={'Adobe Photoshop'}></Product>
          <Product logoFile={'adobe-xd-icon'} logoText={'Adobe XD'}></Product>
          <Product logoFile={'visual-studio-code-icon'} logoText={'Visual Studio Professional'}></Product>
          </span>
        <p><strong>Audience:</strong> High school students determining if college was right for them.
          Overview: We used nationally sourced data to break down most students in
          3 categories; career focused, grad school focused, and social focused. We
          used this to make 3 similar sites to cater to each category. We also pulled
          from social media and our Cocreate Newsletter to show what active
          students are doing.</p>
      </Site>
    </>
  );
};

export default Sites;
