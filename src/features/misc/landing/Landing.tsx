import { Head } from "@/components/Head";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <>
      <Head title="Landing" />
      Landing Page
      <ul>
        <li>
          <Link to="/app/plans">Go to Plans</Link>
        </li>
        <li>
          <Link to="/app/crypto/bitcoin">Go crypto/bitcoin</Link>
        </li>
      </ul>
    </>
  );
};
