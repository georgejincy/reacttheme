import React, { Component } from 'react';
import Sidebar from '../components/Sidebar'

class Home extends Component {
  render() {
    return (
    	<div id='wrapper'>
    	   <div id="main">
            <div className="inner">

                <header id="header">
                  <a href="index.html" className="logo"><h2>RingLeader</h2></a>
                  <ul className="icons">
                    <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon fa-snapchat-ghost"><span className="label">Snapchat</span></a></li>
                    <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" className="icon fa-medium"><span className="label">Medium</span></a></li>
                  </ul>
                </header>

                <section id="banner">
                  <div className="content">
                    <header>
                      <h1>Hi, I’m Editorial<br />
                      by HTML5 UP</h1>
                      <p>A free and fully responsive site template</p>
                    </header>
                    <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                    <ul className="actions">
                      <li><a href="#" className="button big">Learn More</a></li>
                    </ul>
                  </div>
                  <span className="image object">
                    <img src="images/pic10.jpg" alt="" />
                  </span>
                </section>
                <section>
                <div className='content'>
         	
													<h3>Form</h3>

													<form method="post" action="#">
														<div className="row uniform">
															<div className="6u 12u$(xsmall)">
																<input type="text" name="demo-name" id="demo-name" placeholder="Name" />
															</div>
															<div className="6u$ 12u$(xsmall)">
																<input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
															</div>
															
															<div className="12u$">
																<div className="select-wrapper">
																	<select name="demo-category" id="demo-category">
																		<option value="">- Category -</option>
																		<option value="1">Manufacturing</option>
																		<option value="1">Shipping</option>
																		<option value="1">Administration</option>
																		<option value="1">Human Resources</option>
																	</select>
																</div>
															</div>
														
											
														
															<div className="12u$">
																<textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
															</div>
															
															<div className="12u$">
																<ul className="actions">
																	<li><input type="submit" value="Send Message" className="special" /></li>
																	<li><input type="reset" value="Reset" /></li>
																</ul>
															</div>
														</div>
													</form>
                </div>

                </section>

                <section>
                  <header className="major">
                    <h2>Erat lacinia</h2>
                  </header>
                  <div className="features">
                    <article>
                      <span className="icon fa-diamond"></span>
                      <div className="content">
                        <h3>Portitor ullamcorper</h3>
                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                      </div>
                    </article>
                    <article>
                      <span className="icon fa-paper-plane"></span>
                      <div className="content">
                        <h3>Sapien veroeros</h3>
                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                      </div>
                    </article>
                    <article>
                      <span className="icon fa-rocket"></span>
                      <div className="content">
                        <h3>Quam lorem ipsum</h3>
                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                      </div>
                    </article>
                    <article>
                      <span className="icon fa-signal"></span>
                      <div className="content">
                        <h3>Sed magna finibus</h3>
                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                      </div>
                    </article>
                  </div>
                </section>

                <section>
                  <header className="major">
                    <h2>Ipsum sed dolor</h2>
                  </header>
                  <div className="posts">
                    <article>
                      <a href="#" className="image"><img src="images/pic01.jpg" alt="" /></a>
                      <h3>Interdum aenean</h3>
                      <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                      <ul className="actions">
                        <li><a href="#" className="button">More</a></li>
                      </ul>
                    </article>
                    <article>
                      <a href="#" className="image"><img src="images/pic02.jpg" alt="" /></a>
                      <h3>Nulla amet dolore</h3>
                      <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                      <ul className="actions">
                        <li><a href="#" className="button">More</a></li>
                      </ul>
                    </article>
                    <article>
                      <a href="#" className="image"><img src="images/pic03.jpg" alt="" /></a>
                      <h3>Tempus ullamcorper</h3>
                      <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                      <ul className="actions">
                        <li><a href="#" className="button">More</a></li>
                      </ul>
                    </article>
                    <article>
                      <a href="#" className="image"><img src="images/pic04.jpg" alt="" /></a>
                      <h3>Sed etiam facilis</h3>
                      <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                      <ul className="actions">
                        <li><a href="#" className="button">More</a></li>
                      </ul>
                    </article>
                    <article>
                      <a href="#" className="image"><img src="images/pic05.jpg" alt="" /></a>
                      <h3>Feugiat lorem aenean</h3>
                      <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                      <ul className="actions">
                        <li><a href="#" className="button">More</a></li>
                      </ul>
                    </article>
                    <article>
                      <a href="#" className="image"><img src="images/pic06.jpg" alt="" /></a>
                      <h3>Amet varius aliquam</h3>
                      <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                      <ul className="actions">
                        <li><a href="#" className="button">More</a></li>
                      </ul>
                    </article>
                  </div>
                </section>

            </div>
          </div>
          <Sidebar />
    	</div>
            );
  }
}

export default Home;