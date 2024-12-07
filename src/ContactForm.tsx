import { useState } from "react";  
import { useForm } from "react-hook-form";  
import { z, ZodType } from "zod";  
import { zodResolver } from "@hookform/resolvers/zod";  
import success from './assets/icon-success-check.svg';  

type FormData = {  
  firstname: string;  
  lastname: string;  
  email: string;  
  message: string;  
  query: 'GeneralEnquiry' | 'SupportRequest';  
  agree: boolean;  
};  

const ContactForm = () => {  
  const [showPopup, setShowPopup] = useState(false);  
  const [selectedQuery, setSelectedQuery] = useState<string | null>(null);  

  const schema: ZodType<FormData> = z.object({  
    firstname: z.string().nonempty("This field is required"),  
    lastname: z.string().nonempty("This field is required"),  
    email: z.string().nonempty("Email is required").email("Please enter a valid email address"),  
    message: z.string().nonempty("This field is required"),  
    query: z.enum(['GeneralEnquiry', 'SupportRequest'], {  
      errorMap: () => ({ message: "Please select a query type" })  
    }),  
    agree: z.boolean().refine(val => val === true, {  
      message: "To submit this form, please consent to being contacted"  
    })  
  });  

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({  
    resolver: zodResolver(schema)  
  });  

  const onSubmit = (data: FormData) => {  
    console.log(data);  
    setShowPopup(true);  
    setTimeout(() => {  
      window.location.reload();  // Refresh the page after showing the popup  
    }, 3000);  // Show popup for 3 seconds  
  };  

  return (  
    <div>  
      {showPopup && (  
        <div className="fixed top-0 left-0 right-0 bg-darkgreen text-white p-4 flex flex-col items-center justify-center z-50">  
          <div className="flex flex-col bg-darkergray p-4 rounded-md">  
            <div className="flex items-center">  
              <img src={success} alt="Success Icon" className="h-6 w-6 mr-2" />  
              <h1 className="text-xl font-bold">Message sent</h1>  
            </div>  
            <p className="mt-[10px] text-gray-400">Thanks for completing the form, we'll be in touch soon!</p>  
          </div>  
        </div>  
      )}  
      <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-lightgreen flex items-center justify-center min-h-screen">  
        <div className="flex flex-col bg-white w-full max-w-2xl p-4 rounded-2xl">  
          <div className="p-[10px]">  
            <h1 className="text-2xl font-bold font-Karla">Contact Us</h1>  
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-[20px]">  
              <div className="flex flex-col flex-1">  
                <label htmlFor="firstname">First Name<span className=" ml-[10px] text-green-700">*</span></label>  
                <input  
                  className="border cursor-pointer border-black h-[40px] rounded-[5px] p-1 mt-[10px] hover:border-2 hover:border-green-500"  
                  id="firstname"  
                  type="text"  
                  {...register('firstname')}  
                />  
                {errors.firstname && <p className="text-red-600">{errors.firstname.message}</p>}  
              </div>  
              <div className="flex flex-col flex-1">  
                <label htmlFor="lastname">Last Name<span className=" ml-[10px] text-green-700">*</span></label>  
                <input  
                  className="border cursor-pointer border-black h-[40px] rounded-[5px] p-1 mt-[10px] hover:border-2 hover:border-green-500"  
                  id="lastname"  
                  type="text"  
                  {...register('lastname')}  
                />  
                {errors.lastname && <p className="text-red-600">{errors.lastname.message}</p>}  
              </div>  
            </div>  
            <div className="flex flex-col mt-[20px]">  
              <label htmlFor="email">Email<span className=" ml-[10px] text-green-700">*</span></label>  
              <input  
                type="email"  
                id="email"  
                className="p-1 border cursor-pointer border-black rounded-[5px] w-full mt-[10px] h-[40px] hover:border-2 hover:border-green-500"  
                {...register('email')}  
              />  
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}  
            </div>  
            <div className="flex flex-col mt-[20px]">  
              <label>Query Type<span className=" ml-[10px] text-green-700">*</span></label>  
              <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">  
                <div  
                  className={`flex items-center border p-2 rounded-md w-full md:w-[300px] mt-[10px] ${selectedQuery === 'GeneralEnquiry' ? 'bg-lightgreen' : 'bg-white'} focus-within:border-2 focus-within:border-green-500`}  
                >  
                  <input  
                    type="radio"  
                    id="generalenquiry"  
                    value="GeneralEnquiry"  
                    className="ml-[18px] mr-2 focus:ring-2 focus:ring-green-500"  
                    {...register('query')}  
                    onChange={() => setSelectedQuery('GeneralEnquiry')}  
                  />  
                  <label htmlFor="generalenquiry">General Enquiry</label>  
                </div>  
                <div  
                  className={`flex items-center border p-2 rounded-md w-full md:w-[300px] mt-[10px] ${selectedQuery === 'SupportRequest' ? 'bg-lightgreen' : 'bg-white'} focus-within:border-2 focus-within:border-green-500`}  
                >  
                  <input  
                    type="radio"  
                    id="supportrequest"  
                    value="SupportRequest"  
                    className="ml-[18px] mr-2 focus:ring-2 focus:ring-green-500"  
                    {...register('query')}  
                    onChange={() => setSelectedQuery('SupportRequest')}  
                  />  
                  <label htmlFor="supportrequest">Support Request</label>  
                </div>  
              </div>  
              {errors.query && <p className="text-red-600">{errors.query.message}</p>}  
            </div>  
            <div className="flex flex-col mt-[20px]">  
              <label htmlFor="message">Message<span className=" ml-[10px] text-green-700">*</span></label>  
              <textarea  
                className="p-1 mt-[10px] border border-black rounded-md h-[80px] text-top align-top focus:border-2 hover:border-green-500"  
                id="message"  
                {...register('message')}  
              />  
              {errors.message && <p className="text-red-600">{errors.message.message}</p>}  
            </div>  
            <div className="flex items-center space-x-2 mt-[20px]">  
              <input type="checkbox" id="agree" {...register('agree')} className="focus:border-2 hover:border-green-500" />  
              <label htmlFor="agree" className="text-sm">I consent to being contacted by the team<span className=" ml-[10px] text-green-700">*</span></label>  
              {errors.agree && <p className="text-red-600">{errors.agree.message}</p>}  
            </div>  
            <button className="mt-[40px] bg-mediumgreen w-full md:w-[600px] items-center h-[50px] rounded-md text-white hover:bg-darkergray">Submit</button>  
          </div>  
        </div>  
      </form>  
    </div>  
  );  
};  

export default ContactForm;