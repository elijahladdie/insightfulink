import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <h1 className="text-xl py-2 px-4 text-center font-bold">
          About Insightfulink{" "}
        </h1>
        <div className="p-10 flex flex-col gap-3">
          <h1 className="text-lg capitalize text-custom-tomato">
            Insightfulink
          </h1>
          <p className=" ">
            the word <i className="p-1">Insightfulink</i> is made up two words
            that are <b className="p-1">Insightful</b>and <b>ink</b>, after long
            time of research we came up with result of the true meaning of being
            intelligent and having good resourceful for appplying your skills{" "}
          </p>
          <p>
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
        <div className="flex flex-col gap-4 w-full px-[8%] p-4 ">
          <span>
            - <b>Elie Kuradusenge:</b> Frontend Developer 
          </span>{" "}
          <span>
            - <b> Manzi Hodali Daniel:</b> Backend Developer
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
