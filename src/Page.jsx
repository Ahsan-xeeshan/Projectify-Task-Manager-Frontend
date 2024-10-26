import Board from "./Board";
import Sidebar from "./Sidebar";

const Page = () => {
  return (
    <div className="bg-primary text-white">
      <div className="flex h-screen">
        <Sidebar />
        <Board />
      </div>
    </div>
  );
};

export default Page;
