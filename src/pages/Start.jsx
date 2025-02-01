import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContext } from "../context/GlobalContext";

const Start = () => {
  const [names, setNames] = useState([
    "Shikhar",
    "Akash",
    "Arpit Kumar",
    "Kaushal Chaudhary",
    "Nikhil Baghel",
    "Robin Singh",
    "Sabiraj Singh",
    "Shantanu Singh",
    "Shanvi Yadav",
    "Tanu Chahar",
    "Utkarsh Pathak",
    "Vaishnavi Saxena",
    "Vidit Tiwari",
    "Vikash Mawal",
    "Abhay Singh",
    "Abhinav Kaushal",
    "Aditya Yadav",
    "Akash Mawai",
    "Aleena Khan",
    "Amit Ghuraiya",
    "Ananya Rajput",
    "Apurva Tripathi",
    "Arya Gupta",
    "Atharv Narwar",
    "Ayush Parmar",
    "Dayakant Tyagi",
    "Dharvi Bansal",
    "Divyansh Singh",
    "Harshita",
    "Indra Prakash Singhal",
    "Jitendra Kumar Meena",
    "Jyoti Sharma",
    "Kaushiki Rastogi",
    "Ketan Pathak",
    "Khem Singh",
    "Luv Kishor Sharma",
    "Nikhil Kumar",
    "Parth Rajoria",
    "Payal Meena",
    "Payal Sharma",
    "Prayanshi Sharma",
    "Pushpendra Singh",
    "Rashmi Sharma",
    "Rudra Pratap Sharma",
    "Saloni Parihar",
    "Shaurya Agarwal",
    "Sumit Kumar Meena",
    "Tanishka Singh Sisodiya",
    "Varun Singh",
    "Vedant Sharma",
    "Aniket Gupta",
    "Harsh Mittal",
    "Krishnkant Singhal",
    "Lakshya Dadhich",
    "Manjeet",
    "Manya Gupta",
    "Navya Jain",
    "Nipun Agrawal",
    "Nishi Agarwal",
    "Rohini Jain",
    "Sachin Choudhary",
    "Shaurya Jain",
    "Shravagi Jain",
    "Shreya Shrivastava",
    "Shubham Garg",
    "Sohil Khan",
    "Umang Gupta",
    "Vineet Sharma",
    "Yashashwa Agarwal",
    "Aaditya Shrivastava",
    "Aaditiyaraj Chauhan",
    "Abuzar Khan",
    "Akashi Jain",
    "Arpan Gupta",
    "Arpit Goyal",
    "Ashutosh Dwivedi",
    "Chinmay Singhal",
    "Divyanshi Goyal",
    "Harshita Agarwal",
    "Kanishk Dev",
    "Mehul Mudgal",
    "Nandini Singhal",
    "Neha Choudhary",
    "Nikhil Bhushan Gautam",
    "Nimish Goyal",
    "Ojaswi Singh",
    "Pallavi Tyagi",
    "Parth Bansal",
    "Rashi",
    "Rikki",
    "Rohil Garg",
    "Rohit Chaudhary",
    "Rohit Kumar",
    "Saksham Tyagi",
    "Sameer Singh",
    "Sandesh Meena",
    "Shiksha Gupta",
    "Sonam Jaga",
    "Sudhanshu Shekhar Tiwari",
    "Utkarsh Goyal",
    "Vanshika Mittal",
  ]);
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const { isUser, setIsUser } = useContext(GlobalContext);

  useEffect(() => {
    if (isUser) {
      navigate("/home");
    }
  }, [isUser, navigate]);

  const onChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (names.includes(name)) {
      setIsUser(true);
      navigate("/home");
    } else {
      toast.error("Unauthorized!");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[url(https://res.cloudinary.com/djz9ifbzg/image/upload/v1737994770/start-bg_atkb7g.jpg)] bg-cover bg-center">
      <div className="w-[38vw] z-50 h-[12.6vw] bg-zinc-200 rounded-[1.1vw] p-[1.1vw] flex flex-col items-center shadow-xl">
        <span className="uppercase text-[1.4vw] leading-[1] text-zinc-600 font-semibold">
          Hello There
        </span>
        <h1 className="text-[3.2vw] leading-[1] font-extrabold bg-[url(https://res.cloudinary.com/djz9ifbzg/image/upload/v1737994619/text_mzivog.jpg)] bg-cover bg-center bg-clip-text text-transparent">
          What's your name?
        </h1>
        <form
          onSubmit={onSubmit}
          className="w-full mt-[1.8vw] flex justify-between"
        >
          <input
            type="text"
            className="w-[26.667vw] h-[3.889vw] rounded-[0.833vw] border-[0.278vw] border-zinc-300 text-[1.667vw] leading-[2.222vw] text-center"
            onChange={onChange}
            value={name}
            required
          />
          <input
            value={"Enter"}
            type="submit"
            className="h-[3.889vw] rounded-[0.833vw] px-[2.222vw] bg-gradient-to-tr from-[#ff9580] to-[#dca7df] font-semibold text-white text-[1.389vw] leading-[1.944vw] text-center cursor-pointer"
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Start;
