import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

function Home() {
  const [change, setShnage] = useState("");
  const [task, setTask] = useState([]);

  // submit handel
  const clickHandel = () => {
    axios.post("http://localhost:8000/task", { task: change }).then((res) => {
      console.log(res.data);
      location.reload();
    });
  };
  // get data
  useEffect(() => {
    axios.get("http://localhost:8000/task").then((res) => setTask(res.data));
  }, []);
  // isOk handle
  const isOkHandel = (id, isOk) => {
    // console.log(task);
    if (!isOk) {
      axios
        .post("http://localhost:8000/task/checked", { id })
        .then(() => location.reload());
    }
  };
  // delet handel
  const deletHandel = (id) => {
    axios
      .delete(`http://localhost:8000/task/delete/${id}`)
      .then(() => location.reload());
  };
  
  return (
    <main>
      {/* input box */}
      <form className="pt-10 flex justify-center w-full gap-3">
        <input
          type="text"
          className="border border-black py-1 w-[250px] px-2 outline-none"
          onChange={(e) => setShnage(e.target.value)}
        />
        <button
          className="bg-green-600 text-white px-2 py-1"
          onClick={clickHandel}
        >
          Add
        </button>
      </form>
      {/* task  */}
      <div className="w-[305px] mx-auto py-10 flex flex-col gap-3">
        {task.map((i) => (
          <div
            key={i._id}
            className="bg-gradient-to-r from-[#c889ee] vai-[#E0C3FC] to-[#8EC5FC] flex justify-between px-2 py-1 rounded-[4px]"
          >
            <div className="flex gap-1">
              <button onClick={() => isOkHandel(i._id, i.checked)}>
                {i.checked ? <FaCheckCircle /> : <RiCheckboxBlankCircleLine />}
              </button>
              {i.checked ? (
                <del className="text-gray-700">{i.title}</del>
              ) : (
                <p>{i.title}</p>
              )}
            </div>
            <button onClick={() => deletHandel(i._id)}>
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
