import React from 'react';
// import $ from 'jquery';

class Question extends React.Component {

    componentDidMount() {
        // $('a[href*="#"]').on('click', function (e) {
        //     $('html,body').animate({
        //       scrollTop: $($(this).attr('href')).offset().top - 70
        //     }, 500);
        //     e.preventDefault();
        // });

        // var allPanels = $(".accordion > dd").hide();
        // allPanels.first().slideDown("easeOutExpo");
        // $(".accordion").each(function () {
        //   $(this).find("dt > a").first().addClass("active").parent().next().css({
        //     display: "block"
        //   });
        // });
      
        // $(document).on('click', '.accordion > dt > a', function (e) {
        //   var current = $(this).parent().next("dd");
        //   $(this).parents(".accordion").find("dt > a").removeClass("active");
        //   $(this).addClass("active");
        //   $(this).parents(".accordion").find("dd").slideUp("easeInExpo");
        //   $(this).parent().next().slideDown("easeOutExpo");
        //   return false;
      
        // });
    }

    state = {  }
    render() { 
        return (
            <section className="home-faq-section faq-section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-4">
                            <h2>Frequently Asked Question</h2>
                            <p>
                                Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorperi.
                            </p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptatibus, tempora odio dicta
                                molestiae recusandae delectus perferendis eveniet aspernatur voluptatum earum dolore
                                necessitatibus odit perspiciatis eos, quidem soluta autem esse.
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <dl className="accordion" id="accordionExample">
                                
                                <dt data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <a>
                                        Started several mistake joy say painful removed reached end. 
                                        <span className="float-right">
                                            <i className="ti-angle-down"></i>
                                        </span>
                                    </a>
                                </dt>
                                <dd id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She
                                    consisted consulted elsewhere happiness disposing household any old the. Widow downs you
                                    new shade drift hopes small. So otherwise commanded sweetness we improving.
                                </dd>
                                <dt className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <a>
                                        Although moreover mistaken kindness me feelings do be marianne?
                                        <span className="float-right">
                                            <i className="ti-angle-down"></i>
                                        </span>
                                    </a>
                                </dt>
                                <dd id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She
                                    consisted consulted elsewhere happiness disposing household any old the. Widow downs you
                                    new shade drift hopes small. So otherwise commanded sweetness we improving.
                                </dd>
                                <dt className="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <a>
                                        By in no ecstatic wondered disposal my speaking?
                                        <span className="float-right">
                                            <i className="ti-angle-down"></i>
                                        </span>
                                    </a>
                                </dt>
                                <dd id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She
                                    consisted consulted elsewhere happiness disposing household any old the. Widow downs you
                                    new shade drift hopes small. So otherwise commanded sweetness we improving.
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Question;