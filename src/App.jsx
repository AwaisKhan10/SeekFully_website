import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAccount from "./Component/Create-Acc";
import Login from "./Component/Login";
import Home from "./pages/Home";
import Tool from "./Component/Tool";
import ToolEidt from "./Component/ToolEidt";
import Study from "./Component/Study";
import StudyInterliner from "./Component/StudyInterlinear";
import Jeremiah from "./Component/Jeremiah";
import BibleJeremiah30Page from "./Component/Bible";
import SermonMount from "./Component/SermonMount";
import CrossReference from "./Component/CrossReference";
import Corinthians from "./Component/Corinthians";
import Lexicon from "./Component/Lexicon";
import LexiconDetail from "./Component/LexiconDetail";
import Dictionary from "./Component/Dictionary";
import DictionaryDetail from "./Component/DictionaryDetail";
import HistoricalContext from "./Component/HistoricalContext";
import HistoricalDetail from "./Component/HistoricalDetail";
import WordStudy from "./Component/WordStudy";
import WordStudyDetail from "./Component/WordStudyDetail";
import ScriptureStudy from "./Component/ScriptureStudy";
import ScriptureDetail from "./Component/ScriptureDetail";
import BibleBookStudy from "./Component/BibleBookStudy";
import BibleBookDetail from "./Component/BibleBookDetail";
import TheologicalImplication from "./Component/TheologicalImplication";
import TheologicalDetail from "./Component/TheologicalDetail";
import StudyNotes from "./Component/StudyNote";
import More from "./Component/More";
// SaaD files
import Comunity from "./pages/Comunity";
import Follow_requests from "./Component/Follow_requests";
import Profile from "./pages/Profile";
import Editprofile from "./Component/Editprofile";
import Activity_tracker from "./Component/Activity_tracker";
import Bookmark from "./Component/Bookmark";
import Highligted from "./Component/Highligted";
import Notes from "./Component/Notes";
import Gift_seekfully from "./Component/Gift_seekfully";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/tool" element={<Tool />} />
          <Route path="/tool-edit" element={<ToolEidt />} />
          <Route path="/study" element={<Study />} />
          <Route path="/study-interlinear" element={<StudyInterliner />} />
          <Route path="/jeremiah" element={<Jeremiah />} />
          <Route path="/sermon-mount" element={<SermonMount />} />
          <Route path="/cross-reference" element={<CrossReference />} />
          <Route path="/corinthians" element={<Corinthians />} />
          <Route path="/lexicon" element={<Lexicon />} />
          <Route path="/lexicon-detail" element={<LexiconDetail />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/dictionary-detail" element={<DictionaryDetail />} />
          <Route path="/historical-context" element={<HistoricalContext />} />
          <Route path="/historical-detail" element={<HistoricalDetail />} />
          <Route path="/word-study" element={<WordStudy />} />
          <Route path="/word-study-detail" element={<WordStudyDetail />} />
          <Route path="/scripture-study" element={<ScriptureStudy />} />
          <Route path="/scripture-detail" element={<ScriptureDetail />} />
          <Route path="/bible-book-study" element={<BibleBookStudy />} />
          <Route
            path="/bible-book-study-detail"
            element={<BibleBookDetail />}
          />
          <Route
            path="/theological-implication"
            element={<TheologicalImplication />}
          />
          <Route path="/theological-detail" element={<TheologicalDetail />} />
          <Route path="/study-notes" element={<StudyNotes />} />
          <Route path="/more" element={<More />} />

          <Route path="/bible" element={<BibleJeremiah30Page />} />

          <Route path="/Comunity" element={<Comunity />} />
          <Route path="/follow_requests" element={<Follow_requests />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<Editprofile />} />
          <Route path="/activitytracker" element={<Activity_tracker />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/highlighted" element={<Highligted />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/giftseekfully" element={<Gift_seekfully />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
