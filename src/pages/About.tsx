import Footer from "../components/Footer";
import laddie from "../assests/laddie-profile.jpg"
import manzi from "../assests/manzi-profile.jpg"
const About = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className=" px-[10%] lg:px-[20%]">
        <h1 className="text-xl py-2 px-4 text-center font-bold">
          About Insightfulink{" "}
        </h1>
        <div className="p-10 flex flex-col gap-3 ">
          <h1 className="text-lg capitalize text-custom-tomato">
            Insightfulink
          </h1>
          <p>
            The word <i className="p-1">Insightfulink</i> is made up two words
            that are <b className="p-1">Insightful</b>and <b>ink</b>, after long
            time of research we came up with result of the true meaning of being
            intelligent and having good resourceful for appplying your skills{" "}
          </p>
          <p >
            "InsightfulInk" is a creative combination of words. "Insightful"
            suggests having deep understanding or perception, and "Ink" refers
            to the substance used for writing or printing, often associated with
            books and literature. Together, "InsightfulInk" implies a collection
            of books that provide profound insights and knowledge. It's a name
            that conveys intelligence and depth, making it suitable for an
            online book store that aims to offer thought-provoking and
            insightful literature.
          </p>
        </div>

      </div>
      <h1 className="font-bold text-3xl text-center py-8">Meet our Team</h1>
      <div className="px-4 lg:px-[15%]">
        <div className="flex  items-center justify-center">
          <div>

            <div className=" hover:z-50 transition group duration-300 scale flex relative items-center gap-4 px-3 w-fit h-fit  flex-wrap lg:flex-nowrap  lg:right-40">

              <p className="w-96 relative">Meet Elie, a dynamic software developer currently undergoing rigorous training at Andela while simultaneously serving as a frontend developer at Mvend.
                Driven by an insatiable curiosity for technology and a passion for crafting captivating user experiences. At Andela, he thrives in an environment that fosters learning and collaboration,
                tackling complex challenges with enthusiasm and dedication. In his role at Mvend, Elie channels his creativity into designing sleek and intuitiv
                e interfaces that leave a lasting impression. <br/>
                <span className="relative bottom-0 left-0 whitespace-nowrap p-2">
                  - <b>Elie Kuradusenge:</b> Frontend Developer
                </span>

              </p>
              <img src={laddie} alt="" className="h-96 group-hover:scale-110" />
            </div>
            <div className=" flex relative items-center gap-4 px-3 w-fit h-fit flex-wrap lg:flex-nowrap  lg:left-80 lg:-top-24">

              <img src={manzi} alt="" className="h-96 " />
              <p className="w-96">
                Meet Manzi, a dedicated software developer currently advancing his studies at the University of AUCA in Kigali, Rwanda, driven by a profound curiosity
                about how coding can address real-world challenges.

                Undertaking an apprenticeship at Klab, a prominent tech hub in Rwanda, Manzi thrives in a
                dynamic environment, tackling complex projects with enthusiasm and collaborating effectively with cross-functional teams, poised to make a
                significant impact in the ever-evolving landscape of software development.
               <br/>
                <span className="relative bottom-0 left-0 whitespace-nowrap p-2">
                  - <b>Manzi Hodali Daniel:</b> Backend Developer
                </span>
              </p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
