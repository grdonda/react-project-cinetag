import Details from "pages/Details";
import Favorite from "pages/Favorite";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "tema/Base";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />} >
                    <Route index element={<Home />} />
                    <Route path="favoritos" element={<Favorite />} />
                    <Route path="detalhes/:id" element={<Details />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>

        </BrowserRouter >
    );
}

export default AppRoutes;