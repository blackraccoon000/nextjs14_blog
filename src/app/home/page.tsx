import {templates} from "@/constants/templates";
import {formatMessage} from "@/lib/formatMessage";

const Home = () => {
  const a = formatMessage(templates.a, "test", "Tokyo");
  const b = formatMessage(templates.d.g, "test");
  return (
    <div>
      Home {a} {b}
    </div>
  );
};

export default Home;
