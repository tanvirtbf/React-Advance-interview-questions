import "./App.css";
import UseCallBack from "./components/UseCallBack";

const App = () => {

  const employeeData = [
    {id: 101, name: 'Alice', department:'HR',position:'Manager',salary:60000},
    {id: 102, name: 'Bob', department:'Sales',position:'Executive',salary:50000},
    {id: 103, name: 'Ella', department:'Marketing',position:'Coordinator',salary:55000},
    {id: 104, name: 'David', department:'Finance',position:'Analyst',salary:65000},
    {id: 105, name: 'Sophia', department:'Engineering',position:'Developer',salary:70000},
    {id: 106, name: 'Oliver', department:'Operations',position:'Supervisor',salary:58000},
    {id: 107, name: 'Emma', department:'Sales',position:'Representative',salary:48000},
  ]

  const productData = [
    {id: 1, name: 'Laptop', price: 899, category: 'Electronics',stock:50},
    {id: 2, name: 'Smartphone', price: 699, category: 'Electronics',stock:75},
    {id: 3, name: 'Headphones', price: 149, category: 'Electronics',stock:100},
    {id: 4, name: 'Running Shoes', price: 129, category: 'Clothing',stock:120},
    {id: 5, name: 'Dress Shirt', price: 59, category: 'Clothing',stock:90},
    {id: 6, name: 'Backpack', price: 79, category: 'Accessories',stock:80},
    {id: 7, name: 'Fitness Tracker', price: 199, category: 'Electronics',stock:60},
    {id: 8, name: 'Desk Lamp', price: 39, category: 'Home & Kitchen',stock:150},
    {id: 9, name: 'Cookware Set', price: 299, category: 'Home & Kitchen',stock:40},
    {id: 10, name: 'Yoga Mat', price: 49, category: 'Fitness',stock:100},
  ]

  return (
    <div>
      <UseCallBack />
    </div>
  );
};

export default App;
