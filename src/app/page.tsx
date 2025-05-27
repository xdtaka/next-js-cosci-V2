import Welcome from "./components/welcome";

export default function Home() {
  return (
    <div>
      <h1>Goon page</h1>
      <hr />
      <Welcome headTitle="ฉันรัก Younggu" isShow={false} />
      
    </div>
  );
}
