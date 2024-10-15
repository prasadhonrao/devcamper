import Header from './Header';

function Layout({ children, isAuthenticated, setIsAuthenticated }) {
  return (
    <>
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      {children}
    </>
  );
}

export default Layout;
