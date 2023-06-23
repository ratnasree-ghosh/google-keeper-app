import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

const App = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div>
      <Header heading="Keeper" />
      <Note title="This is the note title" desc="This is the note content" />
      <Footer text={`Copyright ⓒ ${year}`} />
    </div>
  );
};

export default App;
