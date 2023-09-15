import MultiRangeSlider from "./component/mutliRangeSlider/multiRangeSlider";
import "./styles.css";

const App = () => {
  return (
    <div className="app">
      <div className="appheader">
        <h3>MY AVAILABILITY FOR THE NEXT 7 WEEKS</h3>
      </div>
      <div className="divider">Week 1</div>
      <MultiRangeSlider
        min={0}
        max={7}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
      <div className="divider">Week 2</div>
      <MultiRangeSlider
        min={0}
        max={7}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
      <div className="divider">Week 3</div>
      <MultiRangeSlider
        min={0}
        max={7}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
      <div className="divider">Week 4</div>
      <MultiRangeSlider
        min={0}
        max={7}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
      <div className="divider">Week 5</div>
      <MultiRangeSlider
        min={0}
        max={7}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
      <div className="divider">Week 6</div>
      <MultiRangeSlider
        min={0}
        max={7}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
      <div className="divider">Week 7</div>
      <MultiRangeSlider
        min={0}
        max={7}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
    </div>
  );
};

export default App;

/*
This code was created by Alveena Tariq: 
https://github.com/alveenatariq27/stafftribes-alveena-tariq
*/
