import Footer from "./Footer";
import Header from "./Header";

export default function BaseLayout(props: { children: React.ReactNode }) {
  return (
    <div>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </div>
  );
}
