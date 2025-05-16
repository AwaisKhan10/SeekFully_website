import box2 from "../assets/box2.png";
import circle2 from "../assets/circle2.png";
import text2 from "../assets/txt2.png";
import pen2 from "../assets/pen2.png";
import line from "../assets/line2.png";
import img from "../assets/img4.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./tool.css";

const Tool = () => {
  const tools = [
    { label: "Square", src: box2 },
    { label: "Circle", src: circle2 },
    { label: "Text", src: text2 },
    { label: "Pen", src: pen2 },
    { label: "Line", src: line },
    { label: "Image", src: img },
  ];

  return (
    <div className="bg-[#e6ecec] min-h-screen flex flex-col relative font-montserrat">
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between px-2 py-2 border-b border-gray-300 bg-[#e6ecec] sticky top-0 z-20">
        {/* Go Back */}
        <div className="text-[13px] font-sans text-black mb-2 sm:mb-0 flex-shrink-0">
          <span className="cursor-pointer hover:underline">← Go Back</span>
        </div>

        {/* Centered Toolbar */}
        <div className="flex-1 flex justify-center mt-4 sm:mt-0 min-w-0 overflow-x-auto no-scrollbar">
          <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-3 py-1 shadow-sm max-w-full min-w-max">
            <input
              type="text"
              value="Montserrat"
              readOnly
              className="font-montserrat text-gray-900 text-sm font-bold rounded-md border border-gray-300 px-3 py-1 w-[110px] focus:outline-none cursor-default flex-shrink-0"
            />

            <div className="rounded-md border border-gray-300 flex items-center flex-shrink-0">
              <button className="text-gray-700 font-semibold text-lg px-2 py-1 hover:bg-gray-100">
                −
              </button>
              <span className="text-gray-900 font-semibold text-lg select-none px-2">
                12
              </span>
              <button className="text-gray-700 font-semibold text-lg px-2 py-1 hover:bg-gray-100">
                +
              </button>
            </div>

            <button
              className="relative text-gray-900 text-lg px-2 flex-shrink-0"
              title="Text color"
            >
              <span className="font-bold text-xl">A</span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-6 rounded-full rainbow-bar"></span>
            </button>

            <button
              className="text-gray-900 text-2xl font-semibold px-3 rounded flex-shrink-0"
              title="Bold"
            >
              B
            </button>

            <button
              className="text-gray-900 text-lg italic font-semibold px-3 py-1 rounded hover:bg-gray-100 transition flex-shrink-0"
              title="Italic"
            >
              工
            </button>

            <button
              className="text-gray-900 font-semibold text-lg underline px-3 py-1 flex-shrink-0"
              title="Underline"
            >
              U
            </button>

            <button
              className="text-gray-900 text-lg line-through font-semibold px-3 flex-shrink-0"
              title="Strikethrough"
            >
              S
            </button>

            <button
              className="text-gray-900 text-lg font-semibold px-3 flex-shrink-0"
              title="Font size"
            >
              aA
            </button>

            <button
              className="text-gray-900 text-lg px-3 flex-shrink-0"
              title="Align center"
            >
              <i className="fas fa-align-center"></i>
            </button>

            <button
              className="text-gray-900 text-lg px-3 flex-shrink-0"
              title="List unordered"
            >
              <i className="fas fa-list-ul"></i>
            </button>

            <button
              className="sort-button flex justify-between items-center px-3 flex-shrink-0 cursor-pointer"
              onClick={() => alert("Sort/Reorder functionality triggered!")}
              title="Sort / Reorder"
            >
              {/* Three horizontal lines on left */}
              <div className="flex flex-col justify-between h-4">
                <span className="block w-4 h-0.5 bg-gray-800 rounded"></span>
                <span className="block w-4 h-0.5 bg-gray-800 rounded"></span>
                <span className="block w-4 h-0.5 bg-gray-800 rounded"></span>
              </div>

              {/* Arrow icon on right */}
              <i className="fas fa-arrows-alt-v ms-1 ml-2 w-0.5"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row pt-2 flex-1 min-h-0">
        {/* Sidebar */}
        <nav className="flex sm:flex-col w-full sm:w-20 mt-4 sm:mt-10 items-center gap-6 py-4 text-[10px] font-sans text-black bg-[#e6ecec] border-b sm:border-r border-gray-300 h-auto sm:h-[calc(100vh-3rem)] sticky top-[3.25rem] overflow-x-auto sm:overflow-visible no-scrollbar">
          {tools.map((tool, index) => (
            <button
              key={index}
              aria-label={`${tool.label} tool`}
              className="flex flex-col items-center gap-1 cursor-pointer min-w-max"
            >
              <img
                alt={`${tool.label} tool icon`}
                className="w-5 h-5"
                src={tool.src}
                width="20"
                height="20"
              />
              <span>{tool.label}</span>
            </button>
          ))}
        </nav>

        {/* Canvas Area */}
        <div className="flex-1 px-2 sm:px-4 min-h-0 flex flex-col">
          <div className="border border-[#a7c0d8] bg-white rounded-sm min-h-[400px] mt-4 flex-grow"></div>

          {/* Footer */}
          <div className="mt-2 border-t border-gray-300 text-center text-[11px] font-sans text-black py-2 cursor-pointer select-none">
            + Add page
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
