import Header from './Header';

function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default Layout;