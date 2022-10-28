import Header from "./header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header></Header>
    {props.children}
  </div>
);
export default Layout;

// import Header from "./Header";

// const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: "1px solid #DDD",
// };

// const withLayout = (Page) => {
//   return () => (
//     <div style={layoutStyle}>
//       <Header />
//       <Page />
//     </div>
//   );
// };

// export default withLayout;
