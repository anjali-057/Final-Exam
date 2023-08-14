function createHeader() {
    const headerDiv = document.createElement('header');
    headerDiv.id = 'header'; 
    headerDiv.innerHTML = `
        <div class= "logo">
        <img src="./Final Exam/resources/sample-logo.png">
        </div>
        <nav>
              <ul>
                  <li><a href="home.html">Home</a></li>
                  <li><a href="product.html">About</a></li>
                  <li><a href="contact.html">Contact</a></li>
              </ul>
          </nav>
          <div class="search-bar">
            <input type="text" placeholder="Search">
        </div>
    `;
    document.body.prepend(headerDiv);
  }
  function createFooter() {
    const footerDiv = document.createElement('footer');
    footerDiv.id = 'footer'; 
    footerDiv.innerHTML = `
    <div class="footer-logo">
        <img src="./Final Exam/resources/sample-logo.png" alt="Logo">
    </div>
    <div class= "para">
    <p> Title </p>
    <p>         Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, officiis iure cum eligendi cumque earum quia error natus minus beatae enim excepturi odio facere, temporibus nobis! Eligendi autem ea, consectetur animi est magni.</p>
    </div>
</footer>
  
  `;
    document.body.appendChild(footerDiv);
  }
  createHeader();
  createFooter();