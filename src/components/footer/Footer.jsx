const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <section className="px-5 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center border-b pb-8">
            <h2 className="text-3xl font-semibold mb-1">Gadget Heaven</h2>
            <p>Leading the way in cutting-edge technology and information</p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-28 text-center mt-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Services</h3>
              <ul className="space-y-3">
                <li>Product Support</li>
                <li>Order Tracking</li>
                <li>Shipping & Delivery</li>
                <li>Returns</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Company</h3>
              <ul className="space-y-3">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Legal</h3>
              <ul className="space-y-3">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
