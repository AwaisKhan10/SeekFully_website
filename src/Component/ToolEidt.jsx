
import rect from "../assets/rect.png";
import circle from "../assets/circle.png";
import text from "../assets/txt.png"; // Ensure this file exists
import pen from "../assets/pen.png";
import line from "../assets/line.png";
import img from "../assets/img.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./tool.css";



const Tool = () => {
 

  const tools = [
    { label: 'Square', src: rect },
    { label: 'Circle', src: circle },
    { label: 'Text', src: text },
    { label: 'Pen', src: pen },
    { label: 'Line', src: line },
    { label: 'Image', src: img },
  ];

  return (
    <div className="bg-[#e6ecec] min-h-screen flex flex-col relative">

      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-300 bg-[#e6ecec] sticky top-0 z-20">
        {/* Go Back */}
        <div className="text-[13px] font-sans text-black">
          <span className="cursor-pointer hover:underline">← Go Back</span>
        </div>

        {/* Centered Toolbar */}
        <div className="flex-1 flex justify-center mt-4" >
          <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-3 py-1 shadow-sm max-w-full overflow-x-auto">
            <input
              type="text"
              value="Montserrat"
              readOnly
              className="font-montserrat text-gray-900 text-sm rounded-md border border-gray-300 px-3 py-1 w-[110px] focus:outline-none cursor-default"
            />
            <button className="text-gray-700 font-semibold text-lg px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100">−</button>
            <span className="text-gray-900 font-semibold text-lg select-none px-2">12</span>
            <button className="text-gray-700 font-semibold text-lg px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100">+</button>
            <button className="text-gray-900 text-lg px-2" title="Text color">
              <i className="fas fa-font rainbow-text"></i>
            </button>
            <button className="text-gray-900 text-lg font-bold px-2" title="Bold">B</button>
            <button className="text-gray-900 text-lg italic px-2" title="Italic">I</button>
            <button className="text-gray-900 text-lg underline px-2" title="Underline">U</button>
            <button className="text-gray-900 text-lg line-through px-2" title="Strikethrough">S</button>
            <button className="text-gray-900 text-sm font-semibold px-2" title="Font size">aA</button>
            <button className="text-gray-900 text-lg px-2" title="Align left"><i className="fas fa-align-left"></i></button>
            <button className="text-gray-900 text-lg px-2" title="Align justify"><i className="fas fa-align-justify"></i></button>
            <button className="text-gray-900 text-lg px-2" title="List unordered"><i className="fas fa-list-ul"></i></button>
            <button className="text-gray-900 text-lg px-2" title="List ordered"><i className="fas fa-list-ol"></i></button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex pt-2">
        {/* Sidebar */}
        <nav className="w-20 mt-10 flex flex-col items-center gap-6 py-4 text-[10px] font-sans text-black bg-[#e6ecec] border-r border-gray-300 h-[calc(100vh-3rem)] sticky top-[3.25rem]">
          {tools.map((tool, index) =>
            <button
              key={index}
              aria-label={`${tool.label} tool`}
              className="flex flex-col items-center gap-1 cursor-pointer"
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
          )}
        </nav>

        {/* Canvas Area */}
        <div className="flex-1 px-4">
          <div className="border border-[#a7c0d8] bg-white rounded-sm min-h-[400px] mt-4"></div>

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
