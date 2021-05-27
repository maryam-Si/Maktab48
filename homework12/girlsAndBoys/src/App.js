import "./App.css";
import Input from "./components/Input";
import People from "./components/People";
import { useState } from "react";
function App() {
  const PEOPLE = [
    {
      id: 0,
      name: "Aria",
      sex: "girl"
    },
    {
      id: 1,
      name: "Logan",
      sex: "boy"
    },
    {
      id: 2,
      name: "Quinn",
      sex: "girl"
    },
    {
      id: 3,
      name: "Kai",
      sex: "boy"
    },
    {
      id: 4,
      name: "Dashiell",
      sex: "boy"
    },
    {
      id: 5,
      name: "John",
      sex: "boy"
    },
    {
      id: 6,
      name: "Seraphina",
      sex: "girl"
    },
    {
      id: 7,
      name: "Caroline",
      sex: "girl"
    },
    {
      id: 8,
      name: "Tobias",
      sex: "boy"
    },
    {
      id: 9,
      name: "Harper",
      sex: "girl"
    },
    {
      id: 10,
      name: "Mabe",
      sex: "girl"
    },
    {
      id: 11,
      name: "Iris",
      sex: "girl"
    },
    {
      id: 12,
      name: "Beatrice",
      sex: "girl"
    },
    {
      id: 13,
      name: "Knox",
      sex: "boy"
    },
    {
      id: 14,
      name: "August",
      sex: "boy"
    },
    {
      id: 15,
      name: "Poppy",
      sex: "girl"
    },
    {
      id: 16,
      name: "Aurora",
      sex: "girl"
    },
    {
      id: 17,
      name: "Wyatt",
      sex: "boy"
    },
    {
      id: 18,
      name: "Ezra",
      sex: "boy"
    },
    {
      id: 19,
      name: "Emily",
      sex: "girl"
    },
    {
      id: 20,
      name: "Sebastian",
      sex: "boy"
    }
  ];
  const [filteredPeople, setFilteredPeople] = useState(
    PEOPLE.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    })
  );

  function handleFilter(filter) {
    let newArr = filteredPeople.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredPeople(filter ? newArr : PEOPLE);
    console.log(filter);
  }

  return (
    <div className="container">
      <Input handleFilter={handleFilter} />
      <People people={filteredPeople} />
    </div>
  );
}

export default App;
