import React from 'react';
import Product from "./Product";

const Products = (props) => {
    return (
        <section id="products">
            <div className='container'>
                <h1>What I know</h1>
                <div className='product-group'>
                    <h2>Development</h2>
                    <Product logoFile={'bootstrap-5-logo-icon'} logoText={'Bootstrap'}></Product>
                    <Product logoFile={'c-sharp-programming-language-icon'} logoText={'C#'}></Product>
                    <Product logoFile={'drupal-icon'} logoText={'Drupal'}></Product>
                    <Product logoFile={'dotnet-icon'} logoText={'.NET'}></Product>
                    <Product logoFile={'grunt-icon'} logoText={'Grunt'}></Product>
                    <Product logoFile={'gulp-js-icon'} logoText={'Gulp'}></Product>
                    <Product logoFile={'javascript-programming-language-icon'} logoText={'JavaScript'}></Product>
                    <Product logoFile={'jquery-icon'} logoText={'Jquery'}></Product>
                    <Product logoFile={'php-programming-language-icon'} logoText={'PHP'}></Product>
                    <Product logoFile={'react-js-icon'} logoText={'ReactJS'}></Product>
                    <Product logoFile={'sass-icon'} logoText={'SASS'}></Product>
                    <Product logoFile={'visual-studio-code-icon'} logoText={'Visual Studio'}></Product>
                    <Product logoFile={'wordpress-icon'} logoText={'Wordpress'}></Product>
                </div>
                <div className='product-group'>
                    <h2>Design</h2>
                    <Product logoFile={'adobe-audition-icon'} logoText={'Adobe Audition'}></Product>
                    <Product logoFile={'adobe-illustrator-icon'} logoText={'Adobe Illustrator'}></Product>
                    <Product logoFile={'adobe-photoshop-icon'} logoText={'Adobe Photoshop'}></Product>
                    <Product logoFile={'adobe-xd-icon'} logoText={'Adobe XD'}></Product>
                    <Product logoFile={'figma-icon'} logoText={'Figma'}></Product>
                    <Product logoFile={'sketch-icon'} logoText={'Sketch'}></Product>
                </div>
                <div className='product-group'>
                    <h2>Administration</h2>
                    <Product logoFile={'apache-icon'} logoText={'Apache'}></Product>
                    <Product logoFile={'docker-icon'} logoText={'Docker'}></Product>
                    <Product logoFile={'git-icon'} logoText={'Git'}></Product>
                    <Product logoFile={'github-icon'} logoText={'Github'}></Product>
                    <Product logoFile={'google-analytics-icon'} logoText={'Google Analytics'}></Product>
                    <Product logoFile={'mysql-icon'} logoText={'MySQL'}></Product>
                    <Product logoFile={'postman-icon'} logoText={'Postman'}></Product>
                    <Product logoFile={'sql-server-icon'} logoText={'SQL Server'}></Product>
                </div>
                <span></span>
            <div>
                <h1>What I am learning</h1>
                <div className='product-group'>
                    <Product logoFile={'adobe-animate-icon'} logoText={'Adobe Animate'}></Product>
                    <Product logoFile={'angular-icon'} logoText={'AngularJS'}></Product>
                    <Product logoFile={'greensock-icon'} logoText={'Greensock (GSAP)'}></Product>
                    <Product logoFile={'typescript-programming-language-icon'} logoText={'TypeScript'}></Product>
                    <Product logoFile={'vue-js-icon'} logoText={'VueJS'}></Product>
                    <Product logoFile={'webpack-icon'} logoText={'Webpack'}></Product>
                </div>

            </div>
            </div>
        </section>
    )
}

export default Products;