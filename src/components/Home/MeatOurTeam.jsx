import teamMember1 from "../../assets/images/team/1.jpg";
import teamMember2 from "../../assets/images/team/2.jpg";
import teamMember3 from "../../assets/images/team/3.jpg";

// Importing React Icons for social media and navigation
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Car Engine Plug",
    role: "Engine Expert",
    img: teamMember1,
    social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" },
  },
  {
    name: "Car Engine Plug",
    role: "Engine Expert",
    img: teamMember2,
    social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" },
  },
  {
    name: "Car Engine Plug",
    role: "Engine Expert",
    img: teamMember3,
    social: { facebook: "#", twitter: "#", linkedin: "#", instagram: "#" },
  },
];

const MeetOurTeam = () => {
  return (
    <div className="container mx-auto my-12 ">
      <div className="text-center px-6 mb-12">
        <h3 className="text-red-500 uppercase text-lg font-medium">Team</h3>
        <h2 className="text-4xl font-bold">Meet Our Team</h2>
        <p className="text-gray-600 mt-2">
          The Majority Have Suffered Alteration In Some Form, By Injected
          Humour, Or Randomised Words Which Don’t Look Even Slightly Believable.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid lg:grid-cols-3  gap-3 mx-auto ">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg ">
            <img src={member.img} alt={member.name} className="w-full " />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              {/* Social Media Icons */}
              <div className="flex justify-center mt-4 gap-4">
                <a
                  href={member.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaFacebookSquare size={24} />
                </a>
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={member.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
