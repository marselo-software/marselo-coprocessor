import StatisticsSlider from "../components/Content";
import Navbar from "../components/Navbar";
import TeamSection from "../components/TeamMembers";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar fixo no topo */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>
      <div className="pt-20 flex flex-col justify-center items-center space-y-8">
        <StatisticsSlider />
        <TeamSection/>
      </div>

    </div>
  );
}


