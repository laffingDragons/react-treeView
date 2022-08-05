import { useEffect, useState } from 'react';
import './App.css';
import TreeChild from "./components/TreeChild";
import tree from "./treeView";

function App() {
  const [treeView, setTree] = useState(tree);

  useEffect(() => {
    console.log("🚀 ~ App ~ treeView", treeView)
  }, [])

  return (
    <>
      <div className='container mt-4'>
        <TreeChild  treeChild = {treeView}/>
      </div>
    </>
  );
}

export default App;
