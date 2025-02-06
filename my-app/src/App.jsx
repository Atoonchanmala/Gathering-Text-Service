import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import AppRoute from "./routes/tomi.route";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense>
            <AppRoute/>          
        </Suspense>
      </BrowserRouter>
    </div>
  );
};
export default App;
