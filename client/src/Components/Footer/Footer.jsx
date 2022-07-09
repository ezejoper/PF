import React from 'react';


const Footer = () =>{

   return(
    <div>
    {/* <!-- Footer --> */}
    <footer class="bg-dark text-center text-white">
      {/* <!-- Grid container --> */}
      <div class="container p-4">
        {/* <!-- Section: Social media --> */}
        <section class="mb-4">
          {/* <!-- Facebook --> */}
          <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/g.juancruz" target="_blank" role="button"
            ><i class="fab fa-facebook-f"></i
          ></a>
    
          {/* <!-- Twitter --> */}
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-twitter"></i
          ></a>
    
          {/* <!-- Google --> */}
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-google"></i
          ></a>
    
          {/* <!-- Instagram --> */}
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-instagram"></i
          ></a>
    
          {/* <!-- Linkedin --> */}
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-linkedin-in"></i
          ></a>
    
          {/* <!-- Github --> */}
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-github"></i
          ></a>
        </section>
        {/* <!-- Section: Social media --> */}
    
        {/* <!-- Section: Form --> */}
        <section class="">
          <form action="">
            {/* <!--Grid row--> */}
            <div class="row d-flex justify-content-center">
              {/* <!--Grid column--> */}
              <div class="col-auto">
                <p class="pt-2">
                  <strong>Suscríbete a nuestro boletín</strong>
                </p>
              </div>
              {/* <!--Grid column--> */}
    
              {/* <!--Grid column--> */}
              <div class="col-md-5 col-12">
                {/* <!-- Email input --> */}
                <div class="form-outline form-white mb-4">
                  <input type="email" id="form5Example21" class="form-control" />
                  <label class="form-label" for="form5Example21">Direccion de Email</label>
                </div>
              </div>
              {/* <!--Grid column--> */}
    
              {/* <!--Grid column--> */}
              <div class="col-auto">
                {/* <!-- Submit button --> */}
                <button type="submit" class="btn btn-outline-warning mb-4">
                  Suscribirse
                </button>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </form>
        </section>
        {/* <!-- Section: Form --> */}
    
        {/* <!-- Section: Text --> */}
        <section class="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
            eum harum corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>
        </div>
    </footer>
    {/* <!-- Footer -->) */}
    </div>
    )
}

export default Footer