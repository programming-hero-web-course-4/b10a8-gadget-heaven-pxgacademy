import { useLoaderData } from "react-router-dom";


const Dashboard = () => {

 const data = useLoaderData();


console.log(data);

  return <section>dashboard</section>;
};

export default Dashboard;
