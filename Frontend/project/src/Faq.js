import React from "react";
import { Helmet } from "react-helmet";
import './Faq.css';

function Faq(){
   return(
    <div className="faq">
        <Helmet>
      <title> Faqs | E-waste Management</title>
      </Helmet>
      <div className="f" ><h1>Frequently Asked Questions</h1></div>
       <section id="faqs">
        <details class='faq-item'>
            <summary>What is ewaste?</summary>
            <p>E-waste, or electronic waste, refers to discarded electronic devices like computers, smartphones, TVs, and other electronic equipment that have reached the end of their useful life.</p>
        </details>
        <details class='faq-item'>
            <summary>What Does Your Platform Offer?</summary>
            <p>Our platform provides a marketplace for individuals and businesses to sell or bid on e-waste products. It facilitates the responsible disposal and recycling of electronic devices.</p>
        </details>
        <details class='faq-item'>
            <summary>Who Can Use Your Platform?</summary>
            <p>Our platform is open to both individual consumers and businesses looking to responsibly dispose of their electronic devices.</p>
        </details>
        <details class='faq-item'>
            <summary>How Does the Selling Process Work?</summary>
            <p>Users can create an account, list their e-waste products for sale on our platform, specifying details such as product condition, model,photos and any accompanying accessories.Set your price. Interested buyers can then bid on or purchase these items.</p>
        </details>
        <details class='faq-item'>
            <summary>What Types of E-Waste Products Can I Sell?</summary>
            <p>Our platform offers a wide range of e-waste products, including smartphones, laptops, desktop computers, tablets, printers, gaming consoles, and other electronic devices.</p>

        </details>
        <details class='faq-item'>
            <summary>What happens to my electronics after I recycle them?</summary>
            <p>Recycled electronics undergo a process where valuable materials like metals, plastics, and glass are recovered for reuse in new products. Hazardous components are safely disposed of to minimize environmental pollution.</p>
        </details>
        <details class='faq-item'>
            <summary>Do You Offer Pickup Services for E-Waste Products?</summary>
            <p>We may offer pickup services for bulk quantities of e-waste products, depending on your location and the size of the items. Please check with our customer support for details</p>
        </details>
        <details class='faq-item'>
            <summary>Are There Any Restrictions on What Can Be Sold?</summary>
            <p>We have guidelines in place to ensure that only e-waste products meeting regulatory standards can be sold on our platform. Hazardous or illegal items are strictly prohibited.</p>

        </details>
        <details class='faq-item'>
            <summary>Is it safe to recycle my personal data-containing devices?</summary>
            <p>Yes, our e-waste management system follows strict data destruction protocols to ensure your personal information remains confidential. We use certified methods to wipe data from devices before recycling.</p>
        </details>
        <details class='faq-item'>
            <summary>How can I learn more about selling my e-waste products on your platform?</summary>
            <p>Visit our website for more information on how to get started as a seller, including step-by-step guides and resources to help you maximize your selling potential. You can also reach out to our customer support team for personalized assistance.</p>
        </details>
        <details class='faq-item'>
            <summary>How Can I Contact Customer Support?</summary>
            <p>For any inquiries or assistance, you can reach out to our customer support team through the contact information provided on our website. We're here to help!</p>
        </details>
       </section>
    </div>
   )
   
  
   }

export default Faq;