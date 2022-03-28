import Loader from "../components/Loader";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <button onClick={() => toast.success("hello")}>Make me a toast</button>
    </div>
  );
}
