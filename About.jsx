// src/components/About.jsx
import { Link } from "react-router-dom";
import Control from "../reusable-components/Control";

function About() {
  return (
    <section className="max-w-screen mt-12 bg-white shadow-lg rounded-2xl p-8">
      <div className="flex flex-1 justify-start items-center flex-col gap-6">

        <h1 className="text-5xl font-extrabold text-gray-600">About CyberGear</h1>

    
        <p className="w-3/5 text-center text-2xl">Welcome to CyberGear, your one-stop shop for the newest devices and technologies. Our goal is to give you the newest goods that will improve your digital life.
        </p>


        <h2 className="text-5xl font-semibold text-gray-500">Our Story</h2>
        <p className="w-3/5 text-center text-2xl">CyberGear began with a simple goal: to make technology accessible and fun for all. Our dedication to client service and enthusiasm for innovation have made us a reputable brand in the tech and gadget industry.

        </p>

        <h2 className="text-5xl font-semibold text-gray-400">What We Offer</h2>
        <p className="w-3/5 text-center text-2xl">CyberGear offers a large range of high-quality products, including gaming accessories, smart home appliances, and the newest laptops and smartphones. To guarantee that you get the greatest technological experience, we carefully select our items.
        </p>

        
        <h2 className="text-5xl font-semibold text-gray-400">Our Values</h2>
        <p className="w-3/5 text-center text-2xl">At CyberGear, we believe in the importance of innovation, integrity, and customer service. We're committed to providing you with products that are not only modern but also reliable and worth your investment.
        </p>

         <h2 className="text-5xl font-semibold text-gray-400">Call to Action</h2>
        <p className="w-3/5 text-center text-2xl">Ready to upgrade your digital life? Visit us today and discover our latest products and promotions. Reach out to us through our contact form or check out our FAQs for any questions you may have. Let's explore the future of technology together!
        </p>

         <div className="mt-8">
        <Link to="/products">
          <Control label="Shop Now" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg transition duration-200" />
        </Link>
      </div>

      </div>
      
    </section>
  );
}

export default About;