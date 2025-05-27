import React from 'react'

const AboutSectionFour = () => {
  return (
    <div>
        <h1 className='about-heading'><u>About</u></h1>
      <section class="about-area pt-100 pb-100 bg-light" id="about">
  <div class="container">
    <div class="row align-items-center">
      
      <div class="col-lg-6">
        <div class="about-content">
          <h2 class="display-5 fw-bold text-dark mb-4">
            Built for Performance.<br/> Designed for Growth.
          </h2>
          <p class="text-muted fs-5 mb-4">
            Our Affiliate Management System empowers sales teams and marketers to build, manage, and grow successful affiliate programs without the complexity. We believe in making affiliate management easier, faster, and more profitable — helping you reduce workload, improve accuracy, and focus on results.
          </p>
{/* 
          <ul class="list-unstyled d-flex flex-column gap-3">
            <li class="d-flex align-items-center">
              <span class="me-3">
                <i class="bi bi-lightning-charge-fill text-primary fs-4"></i>
              </span>
              <span class="text-dark fw-medium">Lightning-fast performance tracking</span>
            </li>
            <li class="d-flex align-items-center">
              <span class="me-3">
                <i class="bi bi-bar-chart-line-fill text-success fs-4"></i>
              </span>
              <span class="text-dark fw-medium">Optimized for scaling and analytics</span>
            </li>
          </ul> */}
        </div>
      </div>
      <div class="col-lg-6 text-center">
        <img src="assets/images/affiliate-dashboard.png" alt="Affiliate dashboard preview" class="img-fluid rounded shadow"/>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default AboutSectionFour
