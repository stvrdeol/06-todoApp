import Input from "./components/Input";
import List from "./components/List";
import { AppProvider } from "./context/GlobalContext";

function App() {
  return (
    <>
      <AppProvider>
        <section className="bg-[#2b2d42] h-screen grid place-items-center text-white gap-5  font-mono">
          <section className="w-5/6 max-w-3xl flex flex-col gap-5">
            <h1 className="font-black text-3xl text-center">Todo List</h1>
            <Input />
            <List />
          </section>
        </section>
      </AppProvider>
    </>
  );
}

export default App;
