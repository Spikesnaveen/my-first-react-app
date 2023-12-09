***Props***
In React, "props" is short for "properties," and it is a special keyword that is used to pass data from a parent component to a child component

Props are immutable, meaning that a child component cannot modify the values it receives via props. They are read-only

![image](https://github.com/Spikesnaveen/my-first-react-app/assets/40786946/562e7740-5099-4044-93d2-dcc9b505d596)

In this example, the ParentComponent has a variable data, and it passes this data as a prop to ChildComponent using the syntax message={data}. In the ChildComponent, the value of the prop is accessed using props.message and then displayed in the JSX.

Props are a fundamental concept in React, and they facilitate the flow of data in a React application by allowing components to communicate with each other. They make it possible to create reusable and configurable components.
