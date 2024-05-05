import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LangProvider } from "./context/LangContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { SelectedProductProvider } from "./context/SelectedProductContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TopHeader from "./components/TopHeader/TopHeader";
import i18n from "./components/common/components/LangConfig";
import routes from "./routes";
import Loading from "./components/common/components/Loading";
import ScrollToTop from "./components/common/components/ScrollToTop";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulating data loading with a timeout (replace this with actual data fetching logic)
    const fetchData = async () => {
      try {
        // Fetch data or perform asynchronous tasks here
        // For demonstration, we'll just wait for 1 second
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoaded(true); // Update isLoaded after data is fetched
      } catch (error) {
        console.error("Error loading data:", error);
        // Handle errors (e.g., display error message)
      }
    };

    fetchData(); // Call the function to start data loading
  }, []);

  return (
    <Router>
      <div
        className={i18n.t("font")}
        // className="font-noto"
      >
        <LangProvider>
          <SelectedProductProvider>
            <CartProvider>
              <WishlistProvider>
                {isLoaded ? (
                  <React.Fragment>
                    <TopHeader />
                    <Header />
                    <Routes>
                      {routes.map((route, index) => (
                        <Route key={index} {...route} />
                      ))}
                    </Routes>
                    <Footer />
                    <ScrollToTop />
                  </React.Fragment>
                ) : (
                  <Loading />
                )}
              </WishlistProvider>
            </CartProvider>
          </SelectedProductProvider>
        </LangProvider>
      </div>
    </Router>
  );
}

export default App;
