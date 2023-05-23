import React, { useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import { Tilt } from "react-tilt";
import {contacts } from "../constants";

const Contact = () => {
  return (
   
    <div className="bg-black-100 p-8 rounded-2xl">

    
       <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get In Touch.</p>
        <h2 className={styles.sectionHeadText}>Contacts</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
      {contacts.map((contact, index) => (
        <ContactCard
          index={index}
          key={`contacts-${index}`}
          name={contact.name}
          links={contact.links}
          logo={contact.logo}
        />
      ))}
    </div></div>
  
  );
};

const ContactCard = ({index,name,links,logo}) => {
  return (
    <Tilt className="xs:w-[120px] w-[120px] ">
<motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[30px] shadow-card "
        variants={fadeIn("right", "spring", 0.25 * index, 0.55)}
      >
        <div className="bg-tertiary rounded-[30px] "  onClick={() => window.open(links, "_blank")}>
          <img
            src={logo}
            alt={name}
            className="w-full h-full object-contain py-5 px-5"
          ></img>

          <div class=" pb-2 truncate  w-full text-white font-quicksand flex flex-col items-center justify-center">
            {name}
          </div>
        </div>
      </motion.div>
      </Tilt>
  )
}


export default SectionWrapper(Contact);

// const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           to_name: "JavaScript Mastery",
//           from_email: form.email,
//           to_email: "prashantmanandhar2002@gmail.com",
//           message: form.message,
//         },
//         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");

//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);

//           alert("Ahh, something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
    // <div
    //   className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    // >
    //   <motion.div
    //     variants={slideIn("left", "tween", 0.2, 1)}
    //     className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
    //   >
    //     <p className={styles.sectionSubText}>Get in touch</p>
    //     <h3 className={styles.sectionHeadText}>Contact.</h3>

    //     <form
    //       ref={formRef}
    //       onSubmit={handleSubmit}
    //       className='mt-12 flex flex-col gap-8'
    //     >
    //       <label className='flex flex-col'>
    //         <span className='text-white font-medium mb-4'>Your Name</span>
    //         <input
    //           type='text'
    //           name='name'
    //           value={form.name}
    //           onChange={handleChange}
    //           placeholder="What's your good name?"
    //           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
    //         />
    //       </label>
    //       <label className='flex flex-col'>
    //         <span className='text-white font-medium mb-4'>Your email</span>
    //         <input
    //           type='email'
    //           name='email'
    //           value={form.email}
    //           onChange={handleChange}
    //           placeholder="What's your web address?"
    //           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
    //         />
    //       </label>
    //       <label className='flex flex-col'>
    //         <span className='text-white font-medium mb-4'>Your Message</span>
    //         <textarea
    //           rows={7}
    //           name='message'
    //           value={form.message}
    //           onChange={handleChange}
    //           placeholder='What you want to say?'
    //           className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
    //         />
    //       </label>

    //       <button
    //         type='submit'
    //         className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
    //       >
    //         {loading ? "Sending..." : "Send"}
    //       </button>
    //     </form>
    //   </motion.div>

    //   <motion.div
    //     variants={slideIn("right", "tween", 0.2, 1)}
    //     className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
    //   >
    //     <EarthCanvas />
    //   </motion.div>
    // </div>
//   );
