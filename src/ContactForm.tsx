import { useState } from "react";

const ContactForm = () => {


  const [TnC, setTnC]=useState(false)

  const handlecheck=()=>{
    setTnC(!TnC)
  }

  return (
    <form action="">
      <div className="w-full bg-lightgreen flex items-center justify-center min-h-screen">
        <div className="flex flex-col bg-white w-full max-w-2xl p-4 rounded-2xl">
          <div className="p-[10px]">
            <h1 className="text-2xl font-bold font-Karla">Contact Us</h1>
            <div className="flex flex-row space-x-4 mt-[20px]">
              <div className="flex flex-col">
                <label htmlFor="firstname">First Name</label>
                <input
                  className="border border-black h-[40px] rounded-[5px] p-1 w-[300px] mt-[10px]" // Set border and height
                  id="firstname"
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastname">Last Name</label>
                <input
                  className="border border-black h-[40px] rounded-[5px] p-1 w-[300px] mt-[10px] " // Set border and height
                  id="lastname"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col mt-[20px]">
              <label htmlFor="email" className="">Email</label>
              <input type="email" id="email" className="p-1 border border-black rounded-[5px] w-[600px] mt-[10px]  h-[40px]" />
            </div>
            <div className="flex flex-col mt-[20px]">
              <label>Query Type</label>
              <div className="flex space-x-4">
                <div className="flex items-center border border-black p-2 rounded-md w-[300px] mt-[10px]">
                  <input
                    type="radio"
                    id="generalenquiry"
                    name="options"
                    value="GeneralEnquiry"
                    className="ml-[18px] mr-2"
                  />
                  <label htmlFor="generalenquiry">General Enquiry</label>
                </div>
                <div className="flex items-center border border-black p-2 rounded-md w-[300px] mt-[10px]">
                  <input
                    type="radio"
                    id="supportrequest"
                    name="options"
                    value="SupportRequest"
                    className="ml-[18px] mr-2"
                  />
                  <label htmlFor="supportrequest">Support Request</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-[20px]">
              <label htmlFor="message">Message</label>
              <input className="p-1 mt-[10px] border border-black rounded-md h-[80px]" id="message" type="text" />
            </div>
            <div className="space-x-4 mt-[20px]">
              <input onChange={handlecheck} type="checkbox" id="agree" />
              <span>I consent to being contacted by the team</span>
            </div>
            <button className="mt-[40px] bg-mediumgreen w-[600px] items-center h-[50px] rounded-md text-white hover:bg-darkergray">Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
