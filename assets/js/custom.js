class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
<nav id="nav">
      <ul class="container">
          <li><a href="index.html">Home</a></li>
          <li><a href="overview.html">Overview</a></li>
          <li><a href="data.html">Data</a></li>
          <li><a href="methods.html">Methods</a></li>
          <li><a href="results.html">Results</a></li>
          <li><a href="team.html">Team</a></li>
      </ul>
</nav> 
          `
    }
}
  
  //Footer
  
class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `
<!-- Contact -->
<article id="contact" class="wrapper style4">
    <div class="container medium">
        <header>
            <h2>We'd like to hear from you.</h2>
        </header>
        <div class="row">
            <div class="col-12">
                <form method="post" action="#">
                    <div class="row">
                        <div class="col-6 col-12-small">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </div>
                        <div class="col-6 col-12-small">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </div>
                        <div class="col-12">
                            <input type="text" name="subject" id="subject" placeholder="Subject" />
                        </div>
                        <div class="col-12">
                            <textarea name="message" id="message" placeholder="Message"></textarea>
                        </div>
                        <div class="col-12">
                            <ul class="actions">
                                <li><input type="submit" value="Send Message" /></li>
                                <li><input type="reset" value="Clear Form" class="alt" /></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-12">
                <hr />
                <h3>Find us on ...</h3>
                <ul class="social">
                    <li><a href="mailto:clgelera@up.edu.ph" class="icon brands fa-google"><span class="label">Google</span></a></li>
                    <li><a href="https://github.com/Rosenquartz" class="icon brands fa-github"><span class="label">Github</span></a></li>
                    <!--
                    <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                    <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                    <li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
                    <li><a href="#" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
                    <li><a href="#" class="icon brands fa-tumblr"><span class="label">Tumblr</span></a></li>
                    <li><a href="#" class="icon solid fa-rss"><span>RSS</span></a></li>
                    <li><a href="#" class="icon brands fa-instagram"><span>Instagram</span></a></li>
                    <li><a href="#" class="icon brands fa-foursquare"><span>Foursquare</span></a></li>
                    <li><a href="#" class="icon brands fa-skype"><span>Skype</span></a></li>
                    <li><a href="#" class="icon brands fa-soundcloud"><span>Soundcloud</span></a></li>
                    <li><a href="#" class="icon brands fa-youtube"><span>YouTube</span></a></li>
                    <li><a href="#" class="icon brands fa-blogger"><span>Blogger</span></a></li>
                    <li><a href="#" class="icon brands fa-flickr"><span>Flickr</span></a></li>
                    <li><a href="#" class="icon brands fa-vimeo"><span>Vimeo</span></a></li>
                    -->
                </ul>
                <hr />
            </div>
        </div>
        <footer>
            <ul id="copyright">
                <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
        </footer>
    </div>
</article>
        `
      
    }
  }
  
  customElements.define('main-header', Header);
  customElements.define('main-footer', Footer);