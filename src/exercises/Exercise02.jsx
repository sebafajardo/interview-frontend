import React from "react";

/* THE FIX STARTS HERE */

// state data for 3 counters
const CountersNTotal = () => {
  const [data, setData] = React.useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);
  const [total, setTotal] = React.useState(0)

  const onChange = (id, value) => {
    // 1. Make a copy of the items
    var items = [...data];
    // 2. Replace the property you're intested in
    var item = { ...items[id - 1], id: id, value: items[id-1].value + value };
    // 3. Put it back into our array
    items[id - 1] = item;
    // 4. Set the state to our new copy
    setData(items);
    setTotal(total +value)
  }
 /* const onDecrement = (id, value) => {
    // 1. Make a copy of the items
    var items = [...data];
    // 2. Replace the property you're intested in
    var item = { ...items[id - 1], id: id, value: value - 1 };
    // 3. Put it back into our array
    items[id - 1] = item;
    // 4. Set the state to our new copy
    setData(items);
    setTotal(total - 1)
    
  };

  const onIncrement = (id, value) => {
    // 1. Make a copy of the items
    var items = [...data];
    // 2. Replace the property you're intested in
    var item = { ...items[id - 1], id: id, value: value + 1 };
    // 3. Put it back into our array
    items[id - 1] = item;
    // 4. Set the state to our new copy
    setData(items);
    setTotal(total +1)
  };
  */
  return (
    <div>
      {data.map((counter) => (
        <CounterCopy
          id={counter.id}
          value={counter.value}
          onChange={onChange}
        />
      ))}
      <Total total={total}/>
    </div>
  );
};

//Total Component
const Total = ({total}) => {

return (<h4>Total: {total}</h4>)

}

// Counter Component
const Counter = ({ id, value, onDecrement, onIncrement }) => {
  return (
    <div className="d-flex my-2">
      <strong>{value}</strong>
      <div className="ml-2">
        {
          <button
            className="btn btn-danger mr-1"
            onClick={() => onDecrement(id, value)}
          >
            -
          </button>
        }
        {
          <button
            className="btn btn-success"
            onClick={() => onIncrement(id, value)}
          >
            +
          </button>
        }
      </div>
    </div>
  );
};

// Counter Copy
const CounterCopy = ({ id, value, onChange }) => {
  return (
    <div className="d-flex my-2">
      <strong>{value}</strong>
      <div className="ml-2">
        {
          <button
            className="btn btn-danger mr-1"
            onClick={() => onChange(id,-1)}
          >
            -
          </button>
        }
        {
          <button
            className="btn btn-success"
            onClick={() => onChange(id,1)}
          >
            +
          </button>
        }
      </div>
    </div>
  );
};

/* THE FIX ENDS HERE */

const Exercise02 = () => {
  return (
    <div className="container">
      <h2>Instructions</h2>

      <p>
        There are 2 components in this file: <strong>Counter</strong> and{" "}
        <strong>GroupOfCounters</strong>. The steps below will take you through
        modifying and adding components to change functionality and
        implementation.
      </p>

      <ol>
        <li>
          Update the <strong>Counter</strong> component to take{" "}
          <strong>onIncrement</strong> and <strong>onDecrement</strong>{" "}
          callbacks as props and ensure they update the counter's values
          independently. Each callback should take a single, integer value as a
          parameter which is the amount to increment the counter's existing
          value by.
        </li>

        <li>
          Move the global <strong>data</strong> array to the component state for
          the <strong>GroupOfCounters</strong> component.
        </li>

        <li>
          Render a fourth <strong>Counter</strong> component and ensure it's
          value is updated independently from the others.
        </li>

        <li>
          Create a <strong>Total</strong> component, which should display below
          the <strong>Counter</strong> components and always display the running
          total of all the <strong>Counter</strong> values.
        </li>

        <li>
          Make a copy of the <strong>Counter</strong> component, saving the
          original so you're instructor can view it later. Then do the
          following:
          <ol>
            <li>
              Remove the <strong>onIncrement</strong> and{" "}
              <strong>onDecrement</strong> props from the (new){" "}
              <strong>Counter</strong> component
            </li>
            <li>
              Add a single <strong>onChange</strong> callback prop that takes a
              single integer parameter — the new value for the counter.
            </li>
            <li>
              Ensure all <strong>Counter</strong> components still update and
              function independently after this change.
            </li>
          </ol>
        </li>
      </ol>

      <hr className="my-5" />

      <CountersNTotal />
    </div>
  );
};

export default Exercise02;
