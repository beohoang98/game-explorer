import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { api } from "@core/apis/base";
import { ListGames } from "@features/games/ListGames";

function App() {
    return (
        <ApiProvider api={api}>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<ListGames />} />
                </Routes>
            </BrowserRouter>
        </ApiProvider>
    );
}

export default App;
