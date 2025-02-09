import React from "react";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <section className="w-full flex flex-col items-center px-[6vw] py-[3vw] bg-gradient-to-tl from-[#d9a7c7] to-[#fffcdc]">
      <img
        className="h-[8vw]"
        src="https://res.cloudinary.com/djz9ifbzg/image/upload/v1738058586/text-img_1_hvieep.png"
        alt=""
      />
      <div className="w-full mt-[4vw] flex flex-col items-center gap-[2vw]">
        <motion.div
          initial={{
            marginLeft: "160vw",
          }}
          whileInView={{
            marginLeft: "0vw",
          }}
          transition={{
            duration: 1.4,
            ease: "easeIn",
            type: "spring",
          }}
          className="bg-purple-100 w-full rounded-[1.667vw] h-[34vw] p-[2vw] flex items-center justify-between"
        >
          <div className="h-full w-[24vw] rounded-[1.111vw] overflow-hidden object-cover">
            <img
              src="https://res.cloudinary.com/djz9ifbzg/image/upload/v1738602420/WhatsApp_Image_2025-02-03_at_20.55.54_45d3e8c4_fcl4tu.jpg"
              className="h-full w-full"
              alt=""
            />
          </div>
          <div className="h-full flex flex-col w-[58vw]">
            <h1 className="text-[3.333vw] font-semibold">Principal Ma'am</h1>
            <h4 className="uppercase text-[1.25vw] leading-[1] font-medium bg-gradient-to-tr from-[#1f89db] to-[#f42a8b] bg-clip-text text-transparent w-[11vw] mb-[1vw]">
              Mrs. Anita Tiagi
            </h4>
            <p className="text-[1.1vw]">Dear Class 12 Students,</p>
            <p className="text-[1.1vw]">
              As you prepare to step into the vast world beyond A.V.M. Convent
              School, I want to remind you of the spiritual wisdom that has
              guided humanity for centuries. Like Arjuna in the Bhagavad Gita,
              focus on your dharma—your purpose—and fulfill it with dedication
              and sincerity.
            </p>
            <p className="text-[1.1vw]">
              Let the lessons of resilience, compassion, and truth be your
              guiding light. Life may present challenges, but as Lord Krishna
              said, 'Your right is to perform your duty, not to the fruits of
              your actions.' Stay committed to your values, and success will
              follow.
            </p>
            <p className="text-[1.1vw]">
              You will always remain in our prayers and our hearts. May the
              divine blessings of peace and wisdom guide your every step.
            </p>
            <p className="text-[1.1vw]">With endless blessings,</p>
            <p className="text-[1.1vw]">Principal Mrs. Anita Tiagi</p>
          </div>
        </motion.div>

        <motion.div
          initial={{
            marginRight: "160vw",
          }}
          whileInView={{
            marginRight: "0vw",
          }}
          transition={{
            duration: 1.4,
            ease: "easeIn",
            type: "spring",
          }}
          className="bg-purple-100 w-full rounded-[1.667vw] h-[34vw] p-[2vw] flex-row-reverse flex items-center justify-between"
        >
          <div className="h-full w-[24vw] rounded-[1.111vw] overflow-hidden object-cover">
            <img
              src="https://res.cloudinary.com/djz9ifbzg/image/upload/v1738426206/president_jlbfni.jpg"
              className="h-full w-full"
              alt=""
            />
          </div>
          <div className="h-full flex flex-col w-[58vw] items-end">
            <h1 className="text-[3.333vw] font-semibold">President Ma'am</h1>
            <h4 className="uppercase text-[1.25vw] leading-[1] font-medium bg-gradient-to-tr from-[#1f89db] to-[#f42a8b] bg-clip-text text-transparent w-[12vw] mb-[1vw]">
              Mrs. Kusum Tyagi
            </h4>
            <p className="text-right text-[1.1vw]">Dear Class 12 Students,</p>
            <p className="text-right text-[1.1vw]">
              It’s incredible to see how far you’ve come. You’ve walked these
              corridors with pride and left your footprints in the history of
              A.V.M. Convent School. As you step into a new chapter, know that
              life is a canvas, and you are the artist. Paint it with vibrant
              colors of courage, passion, and perseverance.
            </p>
            <p className="text-right text-[1.1vw]">
              Remember, greatness is not about perfection; it’s about embracing
              challenges and growing through them. Dream big, act with purpose,
              and never let fear hold you back. You have all the potential to
              create a legacy of your own.
            </p>
            <p className="text-right text-[1.1vw]">
              May your journey ahead be as bright as the dreams in your heart.
              My blessings and love will always be with you, guiding you every
              step of the way.
            </p>
            <p className="text-right text-[1.1vw]">Warm regards,</p>
            <p className="text-right text-[1.1vw]">President Mrs. Kusum Tyagi</p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            marginLeft: "160vw",
          }}
          whileInView={{
            marginLeft: "0vw",
          }}
          transition={{
            duration: 1.4,
            ease: "easeIn",
            type: "spring",
          }}
          className="bg-purple-100 w-full rounded-[1.667vw] h-[34vw] p-[2vw] flex items-center justify-between"
        >
          <div className="h-full w-[24vw] rounded-[1.111vw] overflow-hidden object-cover">
            <img
              src="https://res.cloudinary.com/djz9ifbzg/image/upload/v1738602420/WhatsApp_Image_2025-02-03_at_20.55.55_bfb06e37_ma4tvf.jpg"
              className="h-full w-full"
              alt=""
            />
          </div>
          <div className="h-full flex flex-col w-[58vw]">
            <h1 className="text-[3.333vw] font-semibold">Chairman Sir</h1>
            <h4 className="uppercase text-[1.25vw] leading-[1] font-medium bg-gradient-to-tr from-[#1f89db] to-[#f42a8b] bg-clip-text text-transparent w-[11vw] mb-[1vw]">
              Mr. V.K. Tyagi
            </h4>
            <p className="text-[1.1vw]">Dear Class 12 Graduates,</p>
            <p className="text-[1.1vw]">
              As you leave the sacred grounds of A.V.M. Convent School, remember
              the divine teachings that have shaped your journey here. Seek
              inspiration from the Vedas and Upanishads, which teach us to walk
              the path of knowledge, truth, and righteousness. In every moment
              of uncertainty, let the inner light of your atman (soul) guide you
              toward decisions that align with your dharma. Know that success is
              not measured by material gains but by how you contribute to the
              world around you.
            </p>
            <p className="text-[1.1vw]">
              May Lord Vishnu bless you with wisdom and Lord Ganesha remove all
              obstacles from your path. My heartfelt blessings are with you as
              you embark on your journey.
            </p>
            <p className="text-[1.1vw]">With blessings,</p>
            <p className="text-[1.1vw]">Chairman Mr. V.K. Tyagi</p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            marginRight: "160vw",
          }}
          whileInView={{
            marginRight: "0vw",
          }}
          transition={{
            duration: 1.4,
            ease: "easeIn",
            type: "spring",
          }}
          className="bg-purple-100 w-full rounded-[1.667vw] h-[34vw] p-[2vw] flex-row-reverse flex items-center justify-between"
        >
          <div className="h-full w-[24vw] rounded-[1.111vw] overflow-hidden object-cover">
            <img
              src="https://res.cloudinary.com/djz9ifbzg/image/upload/v1738602420/WhatsApp_Image_2025-02-03_at_20.55.55_69553cbc_ekk7lt.jpg"
              className="h-full w-full"
              alt=""
            />
          </div>
          <div className="h-full flex flex-col w-[58vw] items-end">
            <h1 className="text-[3.333vw] font-semibold">Director Sir</h1>
            <h4 className="uppercase text-[1.25vw] leading-[1] font-medium bg-gradient-to-tr from-[#1f89db] to-[#f42a8b] bg-clip-text text-transparent w-[12vw] mb-[1vw]">
              Mr. Adarsh Tyagi
            </h4>
            <p className="text-right text-[1.1vw]">Dear Class 12 Graduates,</p>
            <p className="text-right text-[1.1vw]">
              Throughout your years at A.V.M. Convent School, you have shown us
              what determination and creativity can achieve.
            </p>
            <p className="text-right text-[1.1vw]">
              As you leave, I urge you to lead with integrity, to innovate
              boldly, and to always stay curious. Your ideas have the potential
              to change the world, and your actions can inspire others to
              greatness.
            </p>
            <p className="text-right text-[1.1vw]">
              May your journey be filled with exciting challenges and boundless
              opportunities. My blessings and support are with you as you step
              into a world waiting for your brilliance.
            </p>
            <p className="text-right text-[1.1vw]">Warm regards,</p>
            <p className="text-right text-[1.1vw]">Director Mr. Adarsh Tyagi</p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            marginLeft: "160vw",
          }}
          whileInView={{
            marginLeft: "0vw",
          }}
          transition={{
            duration: 1.4,
            ease: "easeIn",
            type: "spring",
          }}
          className="bg-purple-100 w-full rounded-[1.667vw] h-[34vw] p-[2vw] flex items-center justify-between"
        >
          <div className="h-full w-[24vw] rounded-[1.111vw] overflow-hidden object-cover">
            <img
              src="https://res.cloudinary.com/djz9ifbzg/image/upload/v1738602418/WhatsApp_Image_2025-02-03_at_20.55.56_8f05a370_r920rx.jpg"
              className="h-full w-full"
              alt=""
            />
          </div>
          <div className="h-full flex flex-col w-[58vw]">
            <h1 className="text-[3.333vw] font-semibold">
              Administrative Ma'am
            </h1>
            <h4 className="uppercase text-[1.25vw] leading-[1] font-medium bg-gradient-to-tr from-[#1f89db] to-[#f42a8b] bg-clip-text text-transparent w-[11vw] mb-[1vw]">
              Mrs. Priya Tyagi
            </h4>
            <p className="text-[1.1vw]">Dear Class 12 Students,</p>
            <p className="text-[1.1vw]">
              As you embark on this new journey, remember the timeless wisdom of
              our scriptures: ‘Satyam vada, Dharmam chara’ (Speak the truth,
              follow the path of righteousness). These values will give you the
              strength to face any challenge and help you achieve true success
              in life.
            </p>
            <p className="text-[1.1vw]">
              You are not just students of A.V.M. Convent School—you are the
              carriers of a legacy that combines academic excellence with
              spiritual depth. Wherever life takes you, may you stay grounded in
              the values of humility, gratitude, and respect for all.
            </p>
            <p className="text-[1.1vw]">
              May Maa Saraswati illuminate your path with knowledge and Maa
              Durga bless you with courage. My blessings will always be with you
              as you make your mark in the world.
            </p>
            <p className="text-[1.1vw]">Warm regards,</p>
            <p className="text-[1.1vw]">Administrative Head Mrs. Priya Tyagi</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;
