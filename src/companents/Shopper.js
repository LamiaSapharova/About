import "../pages/about.css";

function Shopper() {
  return (
    <div className="container">
      <div className="shopper">
        <div className="shopper-btn">
          <a href="#">@shopper</a>
        </div>
      </div>
      <div className="sec-9">
        <div className="sec-9-item">
          <i class="fe fe-truck fs-lg text-primary"></i>
          <h3>FREE SHIPPING</h3>
          <p>From all orders over $100</p>
        </div>
        <div className="sec-9-item">
          <i class="fe fe-repeat fs-lg text-primary"></i>
          <h3>FREE RETURNS</h3>
          <p>Return money within 30 days</p>
        </div>
        <div className="sec-9-item">
          <i class="fe fe-lock fs-lg text-primary"></i>
          <h3>SECURE SHOPPING</h3>
          <p>You're in safe hands</p>
        </div>
        <div className="sec-9-item">
          <i class="fe fe-tag fs-lg text-primary"></i>
          <h3>OVER 10,000 STYLES</h3>
          <p>We have everything you need</p>
        </div>
      </div>
    </div>
  );
}

export default Shopper;
